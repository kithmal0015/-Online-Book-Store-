#   This System is a Online Bookstore (Node.js + Express)

This System using for design a system for an online bookstore where users can browse books, add them to a cart, and place orders.A Online Bookstore  system using Express with JWT authentication and 3-Tier Architecture.

## Features

- 3-Tier architecture based login
- users can browse books
- add them to a cart
- place orders
- User login & authentication

## 3-Tier Layers Breakdown
 
1. Presentation Layer 
Handles HTTP requests.

Sends requests to the Business Logic Layer.
Displays results or error messages.

2. Business Logic Layer (API Controller + Services)
Validates user input.

Applies business logic 
Calls the Data Access Layer.

3. Data Access Layer (Database Interaction)
Interacts with the database to retrieve book data.

## Sql schema

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  isbn VARCHAR(20) UNIQUE NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  cover_image VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES carts(id),
  book_id INTEGER REFERENCES books(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  shipping_address TEXT NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  book_id INTEGER REFERENCES books(id),
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for performance
CREATE INDEX idx_books_title ON books(title);
CREATE INDEX idx_books_author ON books(author);
CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

 ## file Structure 
 online-bookstore/
├── frontend/                      -Presentation Layer
│   ├── public/
│   │   ├── index.html
│   │   └── styles.css
│   └── src/
│       ├── components/
│       │   ├── BookCard.js
│       │   ├── BookList.js
│       │   ├── Cart.js
│       │   ├── Navbar.js
│       │   └── SearchBar.js
│       ├── pages/
│       │   ├── BookDetailsPage.js
│       │   ├── CartPage.js
│       │   ├── CheckoutPage.js
│       │   └── HomePage.js
│       ├── services/
│       │   └── api.js
│       ├── App.js
│       └── index.js
├── backend/                       -Business Logic Layer
│   ├── controllers/
│   │   ├── bookController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Book.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   └── User.js
│   ├── routes/
│   │   ├── bookRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── services/
│   │   ├── bookService.js
│   │   ├── cartService.js
│   │   └── orderService.js
│   ├── .env
│   ├── app.js
│   ├── config.js
│   └── server.js
└── database/                     -Data Access Layer
    ├── migrations/
    │   └── 001_initial_schema.sql
    ├── seeds/
    │   └── books.json
    └── queries/
        ├── bookQueries.js
        ├── cartQueries.js
        └── orderQueries.js


### Auth
- `POST /login`: Authenticate user 

### Usre
- `GET /user-api/user/:usreId`
- `POST /usre-api/user/:usreId/enroll`

### Books
app.use('/api/books', bookRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

### Registration
- `POST /registration-api/enroll` (user only)
- `GET /registration-api/schedule` (user only)

## Getting Started
 
- Back End 
```bash
cd backend
npm install
node server.js
 
- FrontEnd 
cd frontend 
npm install
npm start

