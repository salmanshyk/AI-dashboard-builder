from pydantic import BaseModel

# Signup ke time user se yeh data chahiye
class UserCreate(BaseModel):
    email: str
    password: str

# Response bhejte time (password hide karne ke liye)
class UserResponse(BaseModel):
    id: int
    email: str
    is_active: bool

    class Config:
        from_attributes = True

# Login successful hone par token bhejne ke liye
class Token(BaseModel):
    access_token: str
    token_type: str