# 🚀 PlaceMux Node.js Backend – Phase 1

## 📖 Overview

This project was created as part of the **PlaceMux (Altrodav Technologies) Phase 1 Industry Immersion Program**.

The objective of this project is to build a clean, scalable, and industry-standard Node.js backend using **Express.js**, while following professional software development practices.

Throughout this journey, the project evolves from a basic Express server into a complete backend application featuring modular architecture, RESTful APIs, PostgreSQL database integration, Prisma ORM, repository-based persistence, authentication, middleware, and production-ready backend practices.

---

# 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- dotenv
- Nodemon
- Git & GitHub
- Postman

> More technologies will be added as the project progresses.

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
│   ├── controllers
│   ├── data
│   │   └── mockData.js
│   ├── middleware
│   ├── persistence
│   │   ├── userRepository.js
│   │   ├── productRepository.js
│   │   └── orderRepository.js
│   ├── routes
│   │   ├── healthRoutes.js
│   │   ├── sampleRoutes.js
│   │   └── mockRoutes.js
│   ├── services
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
| GET | `/api/users` | Returns user data from PostgreSQL |
| GET | `/api/products` | Returns product data from PostgreSQL |
| GET | `/api/orders` | Returns order data from PostgreSQL |

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

# 🚀 Current Status

**Phase 1 Progress:** **Day 5 Completed**

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

### ⏳ Upcoming Features

- Authentication & Authorization
- Middleware Enhancements
- Input Validation
- JWT Authentication
- Role-Based Access Control
- API Documentation
- Production Deployment

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
- Middleware
- Authentication & Authorization
- Backend Best Practices
- API Design
- Git & GitHub Workflow

---

# 👩‍💻 Author

**Meghana M.**

Computer Science Graduate | Backend Developer (Node.js) | Aspiring Software Engineer

GitHub: https://github.com/meghanam-7