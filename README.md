# 🚀 PlaceMux Node.js Backend – Phase 1

## 📖 Overview

This project was created as part of the **PlaceMux (Altrodav Technologies) Phase 1 Industry Immersion Program**.

The objective of this project is to build a clean, scalable, and industry-standard Node.js backend using **Express.js**, while following professional software development practices.

Throughout this journey, the project evolves from a basic Express server into a complete backend application featuring modular architecture, RESTful APIs, PostgreSQL database integration, Prisma ORM, repository-based persistence, secure authentication, request validation, middleware, and production-ready backend practices.

---

# 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- bcrypt
- JSON Web Token (JWT)
- Helmet
- Express Rate Limit
- Express Validator
- dotenv
- Nodemon
- Git & GitHub
- Postman

---

# 📂 Project Structure

```text
task1-node-server
│
├── prisma
│   ├── migrations
│   └── schema.prisma
│
├── src
│   ├── config
│   │   └── prismaClient.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── mockController.js
│   │
│   ├── data
│   │   └── mockData.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── rateLimiter.js
│   │   └── validationMiddleware.js
│   │
│   ├── persistence
│   │   ├── userRepository.js
│   │   ├── productRepository.js
│   │   └── orderRepository.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── healthRoutes.js
│   │   ├── sampleRoutes.js
│   │   └── mockRoutes.js
│   │
│   ├── services
│   │   ├── authService.js
│   │   └── mockService.js
│   │
│   ├── validations
│   │   └── authValidation.js
│   │
│   ├── utils
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 🌐 Available APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/health` | Check server health |
| GET | `/hello` | Sample API response |
| GET | `/api/users` | Returns user data from PostgreSQL (Protected Route) |
| GET | `/api/products` | Returns product data from PostgreSQL |
| GET | `/api/orders` | Returns order data from PostgreSQL |
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Authenticate user and generate JWT |

---

# 📅 Project Progress

## ✅ Day 1 – Core Server Setup

- Initialized Node.js project
- Installed Express.js
- Configured dotenv
- Configured Nodemon
- Created Express server
- Implemented Health API (`/health`)
- Implemented Sample API (`/hello`)
- Tested APIs using Postman
- Connected project to GitHub

---

## ✅ Day 2 – Pre-Project API Mock Routing

- Refactored project into a professional `src` structure
- Created mock data module
- Implemented modular Express routing
- Created Users Mock API
- Created Products Mock API
- Created Orders Mock API
- Followed Mock-First Development approach
- Tested all APIs successfully using Postman

---

## ✅ Day 3 – API Architecture

- Designed a scalable layered backend architecture
- Created Controller layer (`mockController.js`)
- Created Service layer (`mockService.js`)
- Refactored routes to delegate request handling to controllers
- Moved business logic into the service layer
- Implemented Separation of Concerns
- Maintained RESTful API structure
- Added request-level error handling using `try-catch`
- Successfully tested all APIs using Postman

---

## ✅ Day 4 – Database Architecture

- Installed and configured PostgreSQL
- Installed and configured Prisma ORM
- Connected Prisma with PostgreSQL
- Designed a normalized relational database schema
- Created User, Product and Order models
- Implemented Primary Keys and Foreign Keys
- Established table relationships
- Generated versioned database migrations
- Successfully migrated schema to PostgreSQL
- Inserted realistic sample data using Prisma Studio
- Verified relationships between Users, Products and Orders

---

## ✅ Day 5 – Persistence Layer

- Integrated Prisma Client with Express.js
- Implemented Repository Pattern for database access
- Connected application to live PostgreSQL database
- Replaced mock user retrieval with real database queries
- Implemented CRUD operations in the User Repository
- Added transaction support using Prisma `$transaction()`
- Added graceful database error handling
- Successfully tested live database APIs using Postman
- Verified end-to-end data flow from Express → Repository → Prisma → PostgreSQL

---

## ✅ Day 6 – Authentication & Security

- Extended the User model with password and role fields
- Applied database migration for authentication
- Implemented secure password hashing using bcrypt
- Built User Signup API
- Built User Login API
- Generated JWT tokens after successful authentication
- Implemented JWT Authentication Middleware
- Protected sensitive API routes
- Added Helmet for HTTP security headers
- Added Express Rate Limiter to prevent brute-force attacks
- Stored JWT secret securely using environment variables
- Successfully tested authentication flow using Postman

---

## ✅ Day 7 – Data Schema Validation Middleware

- Installed and configured Express Validator
- Created reusable validation middleware
- Implemented Signup request validation
- Implemented Login request validation
- Validated request body before reaching controllers
- Standardized validation error responses
- Prevented invalid data from entering business logic
- Successfully tested valid and invalid request scenarios using Postman

---

# 🚀 Current Status

**Phase 1 Progress:** **Day 7 Completed**

### ✅ Completed Features

- Express Server Setup
- Environment Configuration
- Modular Routing
- Layered API Architecture
- Controllers
- Services
- Repository Pattern
- PostgreSQL Integration
- Prisma ORM
- Relational Database Design
- Database Migrations
- Database Relationships
- Real Sample Data
- Prisma Studio
- Database-driven APIs
- CRUD Repository Methods
- Transaction Support
- Database Error Handling
- User Authentication
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- Helmet Security
- Rate Limiting
- Request Validation
- Validation Middleware
- Express Validator

### ⏳ Upcoming Features

- Role-Based Authorization
- Global Error Handling
- Logging
- API Documentation
- Production Deployment
- Unit & Integration Testing

---

# ▶️ Run the Project

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Start Production Server

```bash
npm start
```

---

# 🎯 Learning Goals

This repository documents my backend development journey through the PlaceMux Industry Immersion Program.

Key learning areas include:

- Node.js Fundamentals
- Express.js
- REST API Development
- Backend Project Architecture
- Controllers & Services
- Repository Pattern
- PostgreSQL
- Prisma ORM
- Database Design
- Database Migrations
- Transactions
- Authentication & Authorization
- JWT Authentication
- Password Hashing
- Express Middleware
- Request Validation
- Express Validator
- Backend Security Best Practices
- API Design
- Git & GitHub Workflow

---

# 👩‍💻 Author

**Meghana M.**

Computer Science Graduate | Backend Developer (Node.js) | Aspiring Software Engineer

GitHub: https://github.com/meghanam-7