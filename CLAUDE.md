# AI Dashboard Builder — Master Project Context

## 1. PROJECT OVERVIEW

We are building an "AI-first Dashboard Builder" for our Final Year Diploma Project.

The core long-term flow is:

User Uploads / Generates Dataset
        ↓
AI Understands & Cleans Data
        ↓
Prompt-to-Dashboard
        ↓
AI Generated Visualizations
        ↓
AI Insights
        ↓
AI Chat / Voice Editing

IMPORTANT:

We are NOT trying to build a complete Power BI or Tableau clone.

The main differentiator is AI-assisted dashboard creation and natural-language interaction.

The project has approximately 4 months of development time, so features must be implemented incrementally and realistically.

---

## 2. CURRENT DEVELOPMENT MILESTONE

CURRENT MILESTONE:

# Milestone 1 — Login & Authentication

At the current stage, focus ONLY on Login and Authentication.

Do NOT start implementing advanced features unless the user explicitly requests them.

Do NOT prematurely implement:

- AI Dashboard Generator
- AI Chat
- Voice Editing
- Predictive Analytics
- Real-time Collaboration
- Advanced Dashboard Engine
- Dataset Generator
- AI Data Cleaning

These features belong to later milestones.

---

## 3. TEAM STRUCTURE

There are 3 students working on this project.

### Salman — Team Lead / Main Developer

Primary responsibilities:

- Backend development
- Authentication
- FastAPI
- Database
- AI integration
- Data processing
- System architecture
- Frontend/backend integration
- Difficult technical problems
- Final integration

### Swaroop — Frontend Developer

Primary responsibilities:

- React frontend
- TypeScript
- Tailwind CSS
- Login/Signup UI
- Dashboard UI
- Dataset upload UI
- AI Chat UI
- Voice UI
- Frontend API integration
- Responsive design

### Nikhil — Documentation / Testing / Research

Primary responsibilities:

- Documentation
- SRS
- UML diagrams
- Project report
- Testing
- Dataset research
- PPT/PDF
- Basic coding and UI/content changes where appropriate

Nikhil currently has limited coding experience, so do not assign complex backend, AI or architecture tasks to him unless explicitly requested.

---

## 4. TECHNOLOGY STACK

### Frontend — /frontend

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Axios
- Plotly / suitable visualization library

### Backend — /backend

- Python
- FastAPI
- Uvicorn
- PostgreSQL
- SQLAlchemy
- JWT Authentication
- Secure password hashing

### Data Processing

- Pandas
- NumPy
- openpyxl

### AI

- LLM API

The exact AI provider/API may be decided later.

Do not hard-code or assume an AI provider unless explicitly specified.

---

## 5. GENERAL ARCHITECTURE

The intended architecture is:

React Frontend
        ↓
FastAPI Backend
        ↓
Business Logic / AI / Data Processing
        ↓
PostgreSQL Database

The frontend communicates with the backend through APIs.

IMPORTANT:

AI must NOT directly generate arbitrary React/HTML code for dashboards.

For future dashboard generation, AI should preferably return structured dashboard configuration such as:

- chart type
- chart title
- x-axis
- y-axis
- data columns
- filters
- position
- size
- visualization configuration

The frontend/dashboard engine will render the actual visualization.

---

## 6. DESIGN SYSTEM & THEME

The UI must look like a modern, clean and professional SaaS / Business Intelligence platform.

Approved base theme:

- Background: #F8FAFC
- Primary Accent: #4F46E5
- Secondary Accent: #06B6D4
- Text Color: #475569

UI direction:

- Clean professional layout
- Split-screen layouts where appropriate
- Soft shadows such as shadow-xl
- Indigo-to-Cyan gradients for primary buttons
- Rounded modern UI components
- Professional analytics/AI visual identity

The approved Login Page design created by our design workflow is the visual reference.

If a design reference image is provided in the conversation or repository, treat it as the visual source of truth.

Do NOT redesign the project with unrelated colors, layouts or branding.

Use existing logo/assets from the repository whenever available.

---

## 7. IMPORTANT PROJECT PRINCIPLE

This is a learning project as well as a final-year project.

The students must understand the code.

Do not simply generate large amounts of unexplained code.

Prefer:

- clear structure
- modular code
- readable functions
- meaningful variable names
- brief useful comments
- explanations after implementation

The goal is:

UNDERSTAND → IMPLEMENT → TEST → REVIEW

not:

COPY → PASTE → HOPE

---

## 8. REPOSITORY STRUCTURE

The intended structure is approximately:

AI-dashboard-builder/
│
├── frontend/
├── backend/
├── docs/
├── datasets/
├── CLAUDE.md
├── README.md
└── .gitignore

However:

ALWAYS inspect the existing repository before creating or restructuring folders.

Do not recreate existing configuration unnecessarily.

Do not delete existing files without checking their purpose first.
# AI Dashboard Builder — Claude Development Rules

## 9. YOUR ROLE

You are an expert Full-Stack AI Developer helping a 3-student diploma project team.

Your role is to help us:

- understand the architecture
- write implementation code
- debug problems
- explain code
- review code
- maintain consistency between frontend and backend
- follow professional development practices

You are NOT the sole decision maker.

Major architectural decisions should be explained to the user before implementation.

---

## 10. NO HALLUCINATIONS / NO UNNECESSARY CHANGES

Do not:

- invent project requirements
- invent APIs
- invent database fields
- invent dependencies
- change the technology stack
- introduce major libraries unnecessarily
- redesign the architecture without approval
- implement future features prematurely

If something is unclear, inspect the repository and existing documentation first.

If it is still unclear and the decision is important, ask the user.

---

## 11. ALWAYS INSPECT BEFORE CODING

Before implementing a task:

1. Inspect the relevant repository files.
2. Understand the existing structure.
3. Check existing dependencies.
4. Check existing components/routes/services.
5. Check existing API contracts.
6. Check existing documentation.
7. Reuse existing code where appropriate.

Do NOT blindly create a new implementation when an existing implementation already exists.

---

## 12. CURRENT MILESTONE — AUTHENTICATION API CONTRACT

For Milestone 1, the backend will provide:

POST /api/auth/login

Request:

{
  "email": "user@example.com",
  "password": "password"
}

Successful response should contain a JWT access token.

Preferred response format:

{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}

Authentication failures should return an appropriate HTTP error response with a clear error message.

Frontend must use the agreed backend response format.

IMPORTANT:

If the API contract needs to change, do NOT silently change it.

First explain the proposed change and its impact on the other module.

---

## 13. FRONTEND / BACKEND CONSISTENCY

Backend and frontend are being developed in separate Claude Code sessions.

Therefore:

NEVER assume that another Claude conversation knows what this conversation knows.

The following are the source of truth:

1. Current repository code
2. CLAUDE.md
3. Shared project documentation
4. API contracts
5. Git history / merged changes

Do NOT rely on private conversation memory for cross-module architecture.

Before changing an API, authentication flow, database contract or shared architecture:

- inspect the existing implementation
- inspect relevant documentation
- explain the impact
- update the relevant shared documentation when appropriate

The frontend and backend must always agree on:

- endpoint names
- HTTP methods
- request formats
- response formats
- authentication behavior
- error formats
- data models

---

## 14. MAJOR ARCHITECTURAL CHANGES

For major changes:

DO NOT immediately modify multiple modules.

First provide:

### Proposed Change
What you want to change.

### Reason
Why the change is necessary.

### Impact
Which frontend/backend/database components are affected.

### Files
Which files will be modified.

Wait for user approval before making major architectural changes.

Small, isolated and clearly requested changes can be implemented directly.

---

## 15. MODULAR CODE

Write clean, modular code.

### React

Prefer:

- reusable components
- pages
- hooks
- services/API layer
- utility functions

Do not put the entire application into one huge component.

### FastAPI

Prefer:

- routers
- schemas
- models
- services
- database layer
- configuration

Do not put the entire backend into one huge file.

---

## 16. SECURITY

Never hard-code:

- passwords
- database credentials
- JWT secrets
- API keys
- private tokens

Use environment variables.

The `.env` file must NOT be committed to GitHub.

Make sure `.gitignore` protects secrets.

Passwords must be securely hashed.

JWT secrets must be stored securely.

---

## 17. GIT / GITHUB RULES

The project uses GitHub for collaboration.

Do not directly push experimental or unfinished work to the main branch unless explicitly instructed.

Use feature/development branches according to the existing repository workflow.

Before making Git changes:

- inspect current branch
- inspect git status
- do not overwrite another member's work
- do not reset/delete commits without explicit approval

Use clear commit messages.

Examples:

feat: add login page

feat: add JWT authentication

fix: handle invalid login response

docs: update API contract

Before pulling or merging, ensure local work is committed or safely preserved.

---

## 18. LEARNING MODE

This is a student project.

When implementing a meaningful task, after coding briefly explain:

1. What was changed
2. Why it was changed
3. Which files were modified
4. How the code works
5. How to test it
6. Any important concept the students should understand

Do not explain every obvious line unless the user asks for line-by-line explanation.

Use simple language.

If the user asks questions in Hinglish, respond in Hinglish.

If the user asks for English documentation/code comments, provide English.

Code, filenames, commands and technical syntax must remain in proper English.

---

## 19. DO NOT BLINDLY EXECUTE

If the user asks:

"Build login"

First inspect the project and understand what already exists.

If necessary, create a short implementation plan.

Then implement only the requested scope.

Do not silently add:

- dashboard generation
- AI chat
- voice commands
- predictive analytics
- collaboration
- unrelated settings

unless explicitly requested.

---

## 20. AFTER EVERY SIGNIFICANT IMPLEMENTATION

Report:

### Changed
List the important files changed.

### Implemented
Explain the feature.

### Integration
Explain how it connects to other modules.

### Testing
Give exact commands or steps to test it.

### Next
Suggest the logical next step, but DO NOT implement it automatically.

---

## 21. CURRENT TASK

The current development milestone is:

# LOGIN + AUTHENTICATION

The immediate objective is:

Frontend:
- Login UI
- Form validation
- Loading state
- Error state
- API integration

Backend:
- User model
- PostgreSQL connection
- Password hashing
- Login endpoint
- JWT generation
- Authentication error handling

Database:
- Initial user table

Do NOT implement advanced project features yet.

---

## 22. IMPORTANT FINAL RULE

Always follow this priority:

1. User's explicit current request
2. Existing repository implementation
3. CLAUDE.md
4. Shared project documentation
5. Existing API contracts
6. General best practices

Never replace existing project decisions with assumptions.

When in doubt:

INSPECT → EXPLAIN → ASK → IMPLEMENT

The goal is to build one coherent project, even though different team members may use separate Claude Code conversations.