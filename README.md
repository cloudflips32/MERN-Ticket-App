[![Mongoose](https://img.shields.io/badge/MongoDB-v8.17.0-darkgreen.svg?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-v5.1.0-green.svg?logo=express)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.0-darkgreen.svg?logo=Node.js)](https://nodejs.org/en)

---

# Project Summary - as of 08-08-2025

This project is a MERN stack (MongoDB, Express, React, Node.js) support ticket application. The backend is built with Node.js and Express, using MongoDB for data storage and Mongoose for object modeling.

## Backend Features

- **Express Server**: Handles API requests and responses.
- **MongoDB Connection**: Uses Mongoose to connect to a MongoDB database (see `backend/config/db.js`).
- **User Routes**: Provides endpoints for user registration and login (`/api/users` and `/api/users/login`).
- **Controllers**: Contains logic for user registration and login in `backend/controllers/userControllers.js`.
- **Middleware**: Includes error handling middleware for consistent API error responses.

## How to Run

1. Install dependencies: `npm install`
2. Set up a `.env` file with your MongoDB URI and other environment variables.
3. Start the server: `npm run server` (uses nodemon) or `npm start` (uses node).

## File Structure

```
backend/
	server.js                # Main server file
	config/db.js             # MongoDB connection
	controllers/userControllers.js  # User logic
	middleware/errorMiddleware.js   # Error handling
	routes/userRoutes.js     # User API routes
```
