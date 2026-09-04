from pydantic import BaseModel
from datetime import datetime


class DatasetResponse(BaseModel):
    id: int
    user_id: int
    filename: str
    file_type: str
    file_path: str
    file_size: int | None = None
    created_at: datetime

    class Config:
        from_attributes = True