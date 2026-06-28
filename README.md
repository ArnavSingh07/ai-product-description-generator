# AI Product Description Generator

A full-stack web application that helps Food Processing MSMEs generate and manage product descriptions. The project includes a React frontend and an Express.js backend with REST APIs.

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- CORS
- Dotenv

---

## Features

- Product List View
- Search Products
- RESTful CRUD APIs
- Frontend connected to Backend
- API Testing using Postman
- Error Handling Middleware
- Responsive UI

---

## Project Structure

```
ai-product-description-generator/
│
├── frontend/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── data/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/products/search?q=keyword` | Search products |

---

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Week 4 Progress

- Express.js Backend
- REST API Development
- CRUD Operations
- Search Endpoint
- Frontend–Backend Integration
- Postman API Testing
- Error Handling Middleware

---

## Author

**Arnav Singh**

Graphic Era Deemed to be University