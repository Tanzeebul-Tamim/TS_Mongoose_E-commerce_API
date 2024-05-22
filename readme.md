# TS_Mongoose_E-commerce_API

## Overview

This project is a backend API for managing products and orders in an e-commerce application. Built with Express and TypeScript, it uses MongoDB for data storage and Mongoose for data modeling. Zod is employed for data validation to ensure integrity.

## Features

- **Product Management**
  - Create, retrieve, update, delete, and search for products.
- **Order Management**
  - Create, retrieve all orders, and retrieve orders by user email.
- **Inventory Management**
  - Update product inventory when orders are created.

## Project Structure

- **Express**: Framework for building the API.
- **TypeScript**: Ensures type safety and better code quality.
- **MongoDB & Mongoose**: For database operations and data modeling.
- **Zod**: For schema validation.

## Endpoints

### Product Management

1. **Create a New Product**

   - **Endpoint**: `/api/products`
   - **Method**: `POST`
   - **Sample Request Body**:
     ```json
     {
       "name": "iPhone 13",
       "description": "A sleek and powerful smartphone with cutting-edge features.",
       "price": 999,
       "category": "Electronics",
       "tags": ["smartphone", "Apple", "iOS"],
       "variants": [
         {
           "type": "Color",
           "value": "Midnight Blue"
         },
         {
           "type": "Storage Capacity",
           "value": "256GB"
         }
       ],
       "inventory": {
         "quantity": 50,
         "inStock": true
       }
     }
     ```

2. **Retrieve a List of All Products**

   - **Endpoint**: `/api/products`
   - **Method**: `GET`

3. **Retrieve a Specific Product by ID**

   - **Endpoint**: `/api/products/:productId`
   - **Method**: `GET`

4. **Update Product Information**

   - **Endpoint**: `/api/products/:productId`
   - **Method**: `PUT`

5. **Delete a Product**

   - **Endpoint**: `/api/products/:productId`
   - **Method**: `DELETE`

6. **Search a Product**
   - **Endpoint**: `/api/products?searchTerm=term`
   - **Method**: `GET`

### Order Management

1. **Create a New Order**

   - **Endpoint**: `/api/orders`
   - **Method**: `POST`
   - **Sample Request Body**:
     ```json
     {
       "email": "level2@programming-hero.com",
       "productId": "5fd67e890b60c903cd8544a3",
       "price": 999,
       "quantity": 1
     }
     ```

2. **Retrieve All Orders**

   - **Endpoint**: `/api/orders`
   - **Method**: `GET`

3. **Retrieve Orders by User Email**
   - **Endpoint**: `/api/orders?email=email@example.com`
   - **Method**: `GET`

## Data Models

### Product Model

- **name**: string
- **description**: string
- **price**: number
- **category**: string
- **tags**: array of strings
- **variants**: array of objects
  - **type**: string
  - **value**: string
- **inventory**: object
  - **quantity**: number
  - **inStock**: boolean

### Order Model

- **email**: string
- **productId**: ObjectId
- **price**: number
- **quantity**: number

## Validation

Using **Zod** for request validation:

- Ensure product and order data adhere to the specified structure.
- Provide meaningful error messages on validation failure.

## Error Handling

- Handle validation errors with meaningful messages.
- Handle insufficient quantity errors.
- Handle not found errors for products and orders.
- Gracefully handle unknown routes.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Tanzeebul-Tamim/TS_Mongoose_E-commerce_API
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

5. **Access the API**
   - The API will be available at `http://localhost:3000`

## Linting

- Ensure code quality using ESLint.
- Run linting:
  ```bash
  npm run lint
  ```
- Automatically fix linting issues:
  ```bash
  npm run lint:fix
  ```

## Format

- Format your code using Prettier.
- Run Prettier:
  ```bash
  npm run format
  ```

## Deployment

- **Live Server Link**: [https://your-live-server-link](https://your-live-server-link)
