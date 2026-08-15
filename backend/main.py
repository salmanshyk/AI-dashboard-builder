from fastapi import FastAPI

# Initialize FastAPI app
app = FastAPI(title="AI Dashboard Builder API")

# Simple health check endpoint (GET request)
@app.get("/")
async def health_check():
    return {"status": "ok", "message": "FastAPI is running successfully!"}