import pandas as pd
import os
import shutil

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from core.database import get_db
from models.dataset import Dataset
from schemas.dataset import DatasetResponse
from routers.auth import get_current_user
from models.user import User


router = APIRouter(
    prefix="/api/datasets",
    tags=["Datasets"]
)


UPLOAD_DIR = "uploads"

ALLOWED_EXTENSIONS = {".csv", ".xlsx", ".xls"}

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


@router.post(
    "/upload",
    response_model=DatasetResponse
)
def upload_dataset(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Check filename
    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="Filename is required"
        )

    # Check file extension
    file_extension = os.path.splitext(
        file.filename
    )[1].lower()

    if file_extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only CSV and Excel files are allowed"
        )

    # Check file size
    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)

    if file_size == 0:
        raise HTTPException(
            status_code=400,
            detail="File is empty"
        )

    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail="File size must be less than 10 MB"
        )

    # Create uploads directory if it does not exist
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    # Create unique file name
    safe_filename = (
        f"{current_user.id}_{file.filename}"
    )

    file_path = os.path.join(
        UPLOAD_DIR,
        safe_filename
    )

    # Save uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    # Save dataset information in database
    new_dataset = Dataset(
        user_id=current_user.id,
        filename=file.filename,
        file_type=file_extension.replace(".", ""),
        file_path=file_path,
        file_size=file_size
    )

    db.add(new_dataset)
    db.commit()
    db.refresh(new_dataset)

    return new_dataset


@router.get(
    "/{dataset_id}",
    response_model=DatasetResponse
)
def get_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    dataset = db.query(Dataset).filter(
        Dataset.id == dataset_id,
        Dataset.user_id == current_user.id
    ).first()

    if dataset is None:
        raise HTTPException(
            status_code=404,
            detail="Dataset not found"
        )

    return dataset

@router.get("/{dataset_id}/preview")
def preview_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    dataset = db.query(Dataset).filter(
        Dataset.id == dataset_id,
        Dataset.user_id == current_user.id
    ).first()

    if dataset is None:
        raise HTTPException(
            status_code=404,
            detail="Dataset not found"
        )

    try:
        if dataset.file_type == "csv":
            df = pd.read_csv(dataset.file_path)

        elif dataset.file_type in ["xlsx", "xls"]:
            df = pd.read_excel(dataset.file_path)

        else:
            raise HTTPException(
                status_code=400,
                detail="Unsupported file type"
            )

        preview = df.head(5).fillna("").to_dict(
            orient="records"
        )

        return {
            "dataset_id": dataset.id,
            "filename": dataset.filename,
            "columns": list(df.columns),
            "rows": preview
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unable to read dataset: {str(e)}"
        )

@router.delete("/{dataset_id}")
def delete_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    dataset = db.query(Dataset).filter(
        Dataset.id == dataset_id,
        Dataset.user_id == current_user.id
    ).first()

    if dataset is None:
        raise HTTPException(
            status_code=404,
            detail="Dataset not found"
        )

    # Delete physical file
    if os.path.exists(dataset.file_path):
        os.remove(dataset.file_path)

    # Delete database record
    db.delete(dataset)
    db.commit()

    return {
        "message": "Dataset deleted successfully",
        "dataset_id": dataset_id
    }

@router.get("/{dataset_id}/profile")
def profile_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    dataset = db.query(Dataset).filter(
        Dataset.id == dataset_id,
        Dataset.user_id == current_user.id
    ).first()

    if dataset is None:
        raise HTTPException(
            status_code=404,
            detail="Dataset not found"
        )

    try:
        if dataset.file_type == "csv":
            df = pd.read_csv(dataset.file_path)

        elif dataset.file_type in ["xlsx", "xls"]:
            df = pd.read_excel(dataset.file_path)

        else:
            raise HTTPException(
                status_code=400,
                detail="Unsupported file type"
            )

        return {
            "dataset_id": dataset.id,
            "filename": dataset.filename,
            "total_rows": len(df),
            "total_columns": len(df.columns)
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unable to profile dataset: {str(e)}"
        )