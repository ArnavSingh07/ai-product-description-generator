# AI Product Description Generator

A full-stack web application that helps Food Processing MSMEs generate and manage AI-powered product descriptions. The application uses a React frontend, an Express.js backend, and MongoDB Atlas for persistent cloud storage.

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
- MongoDB Atlas
- Mongoose ODM
- CORS
- Dotenv

---

## Database

### Database Choice

This project uses **MongoDB Atlas** with **Mongoose ODM** for persistent cloud storage.

MongoDB was chosen because product information is document-based and requires a flexible schema. MongoDB Atlas provides secure cloud hosting, easy scalability, and seamless integration with Mongoose.

### Database Schema

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

### Schema Diagram

![Schema Diagram](./W5_SchemaDiagram_26100903.png)

## Features

- AI Product Description Generator
- Full CRUD Operations (Create, Read, Update, Delete)
- MongoDB Atlas Integration
- Persistent Cloud Database
- Product Search
- RESTful APIs
- Frontend–Backend Integration
- API Testing using Postman
- Responsive User Interface

---

## Project Structure

```text
ai-product-description-generator/
│
├── frontend/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── README.md
├── W5_SchemaDiagram_26100903.png
└── ...
```

---

## Set Up the Database

1. Create a **MongoDB Atlas** account.
2. Create a **Free M0 Cluster**.
3. Create a **Database User**.
4. Add your current IP address under **Network Access**.
5. Copy the MongoDB connection string.
6. Create a `.env` file inside the **backend** folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Do **not** commit your `.env` file to GitHub. Use `.env.example` with placeholder values instead.

---

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products/search?q=keyword` | Search products |

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

A sample configuration is provided in `.env.example`.

---

## Week 5 Progress

- MongoDB Atlas Integration
- Mongoose ODM Integration
- Database Schema Design
- Persistent Cloud Database
- Full CRUD Operations
- React Frontend Connected to Backend
- Product Search
- Edit and Delete Functionality
- API Testing using Postman

---

## Author

**Arnav Singh**

B.Tech CSE, Graphic Era Deemed to be University