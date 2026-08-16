from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from core.database import get_db
from models.user import User
from schemas.user import UserCreate, UserResponse, Token
from core.security import get_password_hash, verify_password, create_access_token

# Router define kar rahe hain jiska prefix /api/auth hoga
router = APIRouter(prefix="/api/auth", tags=["Authentication"])

# 1. SIGNUP API
@router.post("/signup", response_model=UserResponse)
def signup(user_data: UserCreate, db: Session = Depends(get_db)):
    # Check karo ki kya email pehle se exist karta hai?
    db_user = db.query(User).filter(User.email == user_data.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email is already registered")
    
    # Naya user banao aur password ko encrypt karo
    hashed_pw = get_password_hash(user_data.password)
    new_user = User(email=user_data.email, hashed_password=hashed_pw)
    
    # Database mein save karo
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# 2. LOGIN API
@router.post("/login", response_model=Token)
def login(user_data: UserCreate, db: Session = Depends(get_db)):
    # Database mein user ko uske email se dhundo
    user = db.query(User).filter(User.email == user_data.email).first()
    
    # Agar user na mile YA password galat ho
    if not user or not verify_password(user_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Agar sab sahi hai, toh JWT Token generate karke bhejo
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}