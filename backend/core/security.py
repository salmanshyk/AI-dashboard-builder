from datetime import datetime, timedelta, timezone
import bcrypt
import jwt
import os

# Secret key for JWT Token (Production mein isko .env mein rakhte hain)
SECRET_KEY = os.getenv("SECRET_KEY", "super_secret_key_for_ai_dashboard")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 # Token 1 ghante tak valid rahega

# 1. Password hash (encrypt) karne ka function (Direct bcrypt use karke)
def get_password_hash(password: str) -> str:
    # password ko bytes mein convert karte hain, hash karte hain, aur wapas string banate hain
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password.decode('utf-8')

# 2. Login ke time password check (verify) karne ka function
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(
        plain_password.encode('utf-8'), 
        hashed_password.encode('utf-8')
    )

# 3. JWT Token banane ka function
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt