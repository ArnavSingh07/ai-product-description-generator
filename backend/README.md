# AI Product Description Generator

A full-stack web application that helps Food Processing MSMEs generate and manage AI-powered product descriptions. The application uses a React frontend, an Express.js backend, and MongoDB Atlas for persistent cloud storage.

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose ODM

---

# Database Choice

This project uses **MongoDB Atlas** because product information is document-based and benefits from a flexible schema. MongoDB Atlas provides cloud-hosted storage, easy scalability, and integrates seamlessly with Mongoose.

---

# Database Schema

The application stores product information in the **Product** collection.

| Field | Type |
|-------|------|
| _id | ObjectId |
| productName | String |
| ingredients | String |
| weight | String |
| tone | String |
| description | String |
| createdAt | Date |
| updatedAt | Date |

> **Add your schema diagram image here after creating it.**

```text
README.md
└── W5_SchemaDiagram.png
```

Example:

```md
![Schema Diagram](./W5_SchemaDiagram.png)
```

---

# Set Up the Database

### 1. Create a MongoDB Atlas account

https://www.mongodb.com/atlas

### 2. Create a Free M0 Cluster

### 3. Create a Database User

### 4. Add your IP Address under Network Access

### 5. Copy the Connection String

### 6. Create a `.env` file inside the backend folder

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

# Installation

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products/search?q=keyword` | Search products |

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Do **not** commit your `.env` file to GitHub. Instead, include a `.env.example` file with placeholder values.

---

# Features

- AI Product Description Generator
- MongoDB Atlas Integration
- Full CRUD Operations
- Product Search
- Responsive React Frontend
- REST API using Express.js
- Persistent Cloud Database