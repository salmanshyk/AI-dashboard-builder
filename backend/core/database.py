from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# .env file se secret details load karo
load_dotenv()

# Environment variable se URL get karo
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Database engine create karo
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Database session banayenge (yeh har nayi request par db se connect karega)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class jisse hamare saare models (tables) inherit honge
Base = declarative_base()

# Dependency function (API routes mein use karne ke liye)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()