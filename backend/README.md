# AI Product Description Generator Backend

Node.js and Express.js backend for the AI-Powered E-Commerce Product Description Generator for Food Processing MSMEs.

## Tech Stack

- Node.js
- Express.js
- CORS
- Dotenv

## How to run backend locally

### 1. Navigate to the backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=5000
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the backend

```
http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a product by ID |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products/search?q=keyword` | Search products |

## HTTP Status Codes

- 200 – OK
- 201 – Created
- 204 – No Content
- 400 – Bad Request
- 404 – Not Found
- 500 – Internal Server Error