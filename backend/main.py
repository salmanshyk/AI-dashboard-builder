from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.auth import router as auth_router
from core.database import engine
from models.user import Base

# Database tables auto-create karne ke liye
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Dashboard Builder API",
    version="1.0"
)

# CORS Middleware (Frontend aur Backend ke connection ke liye zaroori hai)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Sabhi origins allow hain (jaise 127.0.0.1:5500)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Auth router ko include kar rahe hain taaki /api/auth/signup aur /login chalein
app.include_router(auth_router)

@app.get("/")
def read_root():
    return {"message": "AI Dashboard Builder Backend is running successfully!"}