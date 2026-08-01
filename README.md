# AI Product Description Generator

A full-stack AI-powered web application that helps Food Processing MSMEs generate professional product descriptions using **Google Gemini AI**. The application provides secure authentication, product management, and AI-powered content generation using a React frontend, Express.js backend, and MongoDB Atlas.

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- Google OAuth 2.0
- Passport.js
- Express Session
- Google Gemini AI (`@google/genai`)
- CORS
- Dotenv

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Google OAuth Login
- Protected Routes
- Secure Password Hashing
- Session Management

## Product Management

- Create Product
- View Products
- Update Product
- Delete Product
- Product Search
- MongoDB Atlas Integration
- Real-time Dashboard
- Authenticated User Dashboard
- Responsive Product Cards

## AI Features

- AI Product Description Generator
- Google Gemini AI Integration
- Multiple Writing Tones
- Ingredient-Aware Descriptions
- Professional Marketing Copy
- Fast AI Response
- Loading State During AI Generation
- User-Friendly Error Handling
- AI Output Preview
- Save Generated Product
- Toast Notifications
- Empty State UI
- Error Boundary

---

# Database

## Database Choice

This project uses **MongoDB Atlas** with **Mongoose ODM** for persistent cloud storage.

MongoDB was selected because product information is document-based and benefits from a flexible schema.

---

# Database Schema

## User Collection

| Field | Type |
|--------|------|
| _id | ObjectId |
| name | String |
| email | String |
| password | String |
| googleId | String |
| createdAt | Date |

---

## Product Collection

| Field | Type |
|--------|------|
| _id | ObjectId |
| productName | String |
| ingredients | String |
| weight | String |
| tone | String |
| description | String |
| createdAt | Date |
| updatedAt | Date |

---

# Schema Diagram

![Schema Diagram](./W5_SchemaDiagram_26100903.png)

---

# Project Structure

```text
ai-product-description-generator/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validation/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── package.json
│
├── PROMPTS.md
├── README.md
└── W5_SchemaDiagram_26100903.png
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/ArnavSingh07/ai-product-description-generator.git
```

```bash
cd ai-product-description-generator
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

SESSION_SECRET=your_session_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key
```

---
---

# Live Deployment

## Frontend (Vercel)

https://ai-product-description-generator-ixac0ui2j-panda-96cc.vercel.app

## Backend (Render)

https://ai-product-description-backend-k120.onrender.com

---

# Deployment Architecture

Frontend (React + Vite)
↓
Vercel

↓

Backend (Express.js)
↓
Render

↓

Database
MongoDB Atlas

↓

AI Service
Google Gemini API

---

# Production Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

SESSION_SECRET=your_session_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=https://ai-product-description-generator-ixac0ui2j-panda-96cc.vercel.app
```

## Frontend (.env)

```env
VITE_API_URL=https://ai-product-description-backend-k120.onrender.com
```

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/google | Google Login |
| GET | /api/auth/logout | Logout |

---

## Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get All Products |
| POST | /api/products | Create Product |
| PUT | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |
| GET | /api/products/search?q=keyword | Search Products |

---

## AI

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/ai/generate | Generate AI Product Description |

---

# AI Request

```json
{
  "productName": "Organic Mango Pickle",
  "ingredients": "Raw Mango, Salt, Mustard Oil",
  "weight": "500g",
  "tone": "Premium"
}
```

---

# AI Response

```json
{
  "success": true,
  "description": "AI generated product description..."
}
```

---

# AI Workflow

1. User enters product details on the frontend.
2. The frontend sends a **POST** request to `/api/ai/generate`.
3. The Express backend validates the request.
4. The backend securely calls the **Google Gemini API** using the API key stored in the `.env` file.
5. Google Gemini generates a professional product description.
6. The generated description is returned to the frontend and displayed to the user.

---


# Project Highlights

# Project Highlights

- Full-Stack MERN Application
- AI-Powered Product Description Generator
- Google Gemini AI Integration
- JWT Authentication
- Google OAuth Authentication
- MongoDB Atlas Cloud Database
- RESTful API Development
- Secure Password Hashing
- Protected Routes
- Product CRUD Operations
- Product Search
- Responsive Dashboard
- Loading States
- Error Handling
- Toast Notifications
- Environment Variable Management
- Cloud Deployment (Render + Vercel)
- Production-Ready Architecture
- Mobile Responsive UI
- API Testing using Postman

---

# Week 7 Deliverables

- Google Gemini AI Integration
- AI Product Description Generator
- Secure API Key Management using `.env`
- Loading State during AI requests
- Error Handling for failed API calls
- PROMPTS.md Documentation
- Updated README

---
# Week 8 Deliverables

Implemented complete frontend integration with backend APIs.

### Completed Features

- Connected all frontend pages to real backend APIs
- Implemented authenticated dashboard using JWT
- Protected routes for authorized users
- Full CRUD operations with validation
- AI feature integrated with loading and error handling
- Product search with optimized filtering using useMemo
- Toast notifications for user feedback
- Error Boundary for graceful error handling
- Responsive UI across mobile, tablet, and desktop
- Empty state design for products
- Performance improvements using React best practices

---

# Week 9 Deliverables

## Application Deployment

Successfully deployed the complete full-stack application to cloud platforms.

### Frontend

- Hosted on Vercel
- Production build using Vite
- Environment variables configured
- Connected with Render backend

### Backend

- Hosted on Render
- MongoDB Atlas connected
- Production CORS configuration
- REST APIs deployed
- Google Gemini AI integration
- JWT Authentication enabled

### Production Testing

Successfully tested:

- User Registration
- User Login
- Protected Routes
- Dashboard
- AI Product Description Generation
- Save Product
- Product Listing
- Product Search
- MongoDB CRUD Operations

### Deployment Challenges Solved

- MongoDB Atlas IP Whitelisting
- Render Environment Variables
- Production CORS Configuration
- Frontend API URL Configuration
- Google OAuth Callback Configuration
- Secure Environment Variable Management

---

# Future Improvements

# Future Improvements

- AI Image Generation
- Product Image Upload
- Multi-language Product Descriptions
- AI SEO Optimization
- Analytics Dashboard
- Inventory Management
- Export Product Details as PDF
- Admin Dashboard
- Email Notifications
- Docker Containerization
- CI/CD using GitHub Actions
- Kubernetes Deployment
- Custom Domain Support

---
# Screenshots

The project includes:

- Login Page
- Dashboard
- AI Feature
- Product List View
- Create, Update & Delete Flow
- Responsive Mobile & Desktop Layout

> Screenshots are included in the internship submission deliverables.

# Author

**Arnav Singh**

B.Tech CSE (AI & DS)

Graphic Era Deemed to be University

---
---

# Deployment Information

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| AI Model | Google Gemini AI |

## Known Limitations

- Render free tier may sleep after approximately 15 minutes of inactivity.
- The first request after inactivity may take 30–60 seconds while the backend wakes up.
- Google OAuth requires valid production callback URLs.
- Free hosting resources may have limited compute capacity.

---

# License

This project was developed for educational purposes as part of the **TBI-GEU AI-Assisted Full Stack Development Internship**.