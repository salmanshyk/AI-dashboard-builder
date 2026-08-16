from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.database import engine, Base
from models import user
from routers import auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Dashboard API")

# --- YAHAN CORS ADD KIYA HAI ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],  # Frontend ka URL allow kar rahe hain
    allow_credentials=True,
    allow_methods=["*"],  # Saare methods (GET, POST, etc.) allow kar rahe hain
    allow_headers=["*"],
)
# -------------------------------

app.include_router(auth.router)

@app.get("/")
async def health_check():
    return {"status": "ok", "message": "FastAPI is running successfully with MySQL!"}