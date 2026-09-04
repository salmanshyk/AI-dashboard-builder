from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from core.database import get_db
from core.security import (
    get_password_hash,
    verify_password,
    create_access_token,
    verify_access_token
)
from models.user import User
from schemas.user import UserCreate, UserResponse, Token


# Router define kar rahe hain jiska prefix /api/auth hoga
router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


# JWT Bearer token read karne ke liye
bearer_scheme = HTTPBearer()


# Current request se JWT token nikalna aur verify karna
def get_bearer_token(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)
):
    token = credentials.credentials

    payload = verify_access_token(token)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token"
        )

    return payload


# JWT se current logged-in user ko database se find karna
def get_current_user(
    payload: dict = Depends(get_bearer_token),
    db: Session = Depends(get_db)
):
    user_email = payload.get("sub")

    user = db.query(User).filter(
        User.email == user_email
    ).first()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )

    return user


# 1. SIGNUP API
@router.post(
    "/signup",
    response_model=UserResponse
)
def signup(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):
    # Check karo ki email pehle se exist karta hai
    db_user = db.query(User).filter(
        User.email == user_data.email
    ).first()

    if db_user:
        raise HTTPException(
            status_code=400,
            detail="Email is already registered"
        )

    # Password ko hash karo
    hashed_pw = get_password_hash(
        user_data.password
    )

    # Naya user create karo
    new_user = User(
        email=user_data.email,
        hashed_password=hashed_pw
    )

    # Database mein save karo
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# 2. LOGIN API
@router.post(
    "/login",
    response_model=Token
)
def login(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):
    # Database mein user ko email se dhundo
    user = db.query(User).filter(
        User.email == user_data.email
    ).first()

    # User nahi mila ya password galat hai
    if not user or not verify_password(
        user_data.password,
        user.hashed_password
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    # JWT token generate karo
    access_token = create_access_token(
        data={"sub": user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


# 3. GET CURRENT USER
@router.get("/me")
def get_me(
    current_user: User = Depends(get_current_user)
):
    return {
        "message": "JWT is valid",
        "user_id": current_user.id,
        "user_email": current_user.email,
        "is_active": current_user.is_active
    }

# 4. PROTECTED TEST API
@router.get("/protected")
def protected_route(
    current_user: User = Depends(get_current_user)
):
    return {
        "message": "You have access to this protected route",
        "user_id": current_user.id,
        "user_email": current_user.email
    }