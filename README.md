# 🚀 PlaceMux Node.js Backend – Phase 1

## 📖 Overview

This project was created as part of the **PlaceMux (Altrodav Technologies) Phase 1 Industry Immersion Program**.

The objective of this project is to build a clean, scalable, and industry-standard Node.js backend using **Express.js**, while following professional software development practices.

Throughout this journey, the project evolves from a basic Express server into a complete backend application featuring modular architecture, RESTful APIs, PostgreSQL database integration, Prisma ORM, repository-based persistence, secure authentication, request validation, API optimization, real-time communication with Socket.io, middleware, and production-ready backend practices.

---

# 🛠 Tech Stack

- Node.js
- Express.js
- Socket.io
- Socket.io Client
- PostgreSQL
- Prisma ORM
- bcrypt
- JSON Web Token (JWT)
- Helmet
- Express Rate Limit
- Express Validator
- Node Cache
- dotenv
- Nodemon
- Git & GitHub
- Postman
- BullMQ
- ioredis
- Redis / Memurai

---

# 📂 Project Structure

```text
task1-node-server
│
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   └── seed.js
│
├── src
│   ├── config
│   │   ├── prismaClient.js
│   │   └── redisConnection.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── cacheMetricsController.js
│   │   ├── jobController.js
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
│   ├── queues
│   │   └── emailQueue.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── cacheMetricsRoutes.js
│   │   ├── healthRoutes.js
│   │   ├── sampleRoutes.js
│   │   ├── mockRoutes.js
│   │   └── jobRoutes.js
│   │
│   ├── services
│   │   ├── authService.js
│   │   └── mockService.js
│   │
│   ├── validations
│   │   └── authValidation.js
│   │
│   ├── utils
│   │   ├── cache.js
│   │   ├── cacheInvalidation.js
│   │   ├── cacheLock.js
│   │   ├── cacheMetrics.js
│   │   └── redisCache.js
│   │
│   ├── workers
│   │   └── emailWorker.js
│   │
│   └── server.js
│
├── client.js
├── testCacheStampede.js
├── testRedisCache.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

---

# 🌐 Available APIs

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/health` | Check server health |
| GET | `/hello` | Sample API response |
| GET | `/api/users` | Returns paginated user data from PostgreSQL (Protected & Cached Route) |
| GET | `/api/products` | Returns product data from PostgreSQL / Redis cache |
| GET | `/api/orders` | Returns order data from PostgreSQL |
| GET | `/api/users/orders` | Returns users with their orders |
| GET | `/api/orders/details` | Returns orders with user and product details |
| GET | `/api/products/orders` | Returns products with related orders |
| POST | `/api/products` | Creates a new product and invalidates the products cache |
| PUT | `/api/products/:id` | Updates an existing product and invalidates the products cache |
| DELETE | `/api/products/:id` | Deletes an existing product and invalidates the products cache |
| GET | `/api/cache/metrics` | Returns cache hit, miss, request, and latency metrics |
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Authenticate user and generate JWT |
| POST | `/api/jobs/email` | Adds an email-processing job to the BullMQ background queue |

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

## ✅ Day 8 – Data Relationships & Population

- Enhanced relational database schema using Prisma
- Applied database relationship constraints
- Created reusable Prisma seed script
- Seeded Users, Products and Orders with realistic sample data
- Queried relational data using Prisma `include`
- Implemented APIs to fetch Users with Orders
- Implemented APIs to fetch Orders with User and Product details
- Implemented APIs to fetch Products with Orders
- Verified cascade and restrict delete behaviors
- Successfully tested all relationship APIs using Postman

---

## ✅ Day 9 – API Optimization Backend

- Implemented in-memory API response caching using Node Cache
- Added cache utility for reusable caching logic
- Optimized database queries using Prisma `select`
- Implemented server-side pagination using `page` and `limit`
- Improved API performance by reducing response payload
- Added API response time measurement using `console.time()`
- Implemented cache keys based on pagination parameters
- Verified cache hits, pagination, and optimized response times using Postman

---

## ✅ Day 10 – Real-Time Communication with Socket.io

- Installed and configured Socket.io with Express
- Integrated HTTP server with Socket.io
- Implemented client connection and disconnection events
- Created welcome event for newly connected clients
- Implemented custom real-time message events
- Built bidirectional communication between client and server
- Implemented Socket.io Rooms
- Sent room-specific messages using room broadcasting
- Handled automatic client reconnection events
- Learned Redis Adapter concept for scaling Socket.io applications
- Successfully tested all real-time events using Socket.io Client

---

## ✅ Day 11 – Background Job Processing with BullMQ & Redis

- Installed and configured BullMQ and ioredis
- Installed and configured Redis-compatible Memurai on Windows
- Established Redis connection using ioredis
- Created a BullMQ email job queue
- Implemented background job processing using a BullMQ Worker
- Integrated the job queue with an Express API
- Configured automatic job retries with fixed backoff
- Tested failed jobs and verified retry attempts
- Implemented job progress tracking using `updateProgress()`
- Added progress event monitoring for 25%, 50% and 100% completion
- Configured completed and failed job retention behavior
- Successfully tested the complete API → Queue → Redis → Worker flow

---

## ✅ Day 12 – Redis-Based Memory Caching

- Implemented Redis-based caching for the Products API using ioredis
- Implemented the cache-aside caching strategy
- Added Redis GET, SET and DELETE utility functions
- Configured a 60-second TTL for product data
- Added cache hit and cache miss tracking
- Implemented cache latency and database latency measurement
- Calculated cache hit ratio and latency improvement
- Implemented Redis-based cache stampede protection using a distributed lock
- Verified concurrent requests do not trigger multiple database queries
- Tested cache expiration and TTL behavior using Memurai CLI
- Documented cache freshness and data consistency considerations
- Successfully verified Redis cache performance using Postman and terminal tests


### 🗄️ Cache Freshness Strategy

The Products endpoint uses a cache-aside strategy with a 60-second TTL.

- Product data is cached in Redis for 60 seconds.
- Redis automatically expires the cached data after the TTL.
- This provides a balance between database load reduction and data freshness.
- The current Products API is read-only and does not expose product create, update, or delete operations, so explicit cache invalidation is not currently required.
- If product mutation APIs are introduced in the future, the `products` cache should be invalidated after a successful database modification using `deleteCache("products")`.
- Cache stampede protection ensures that when the cache expires, concurrent requests do not trigger multiple database queries.
- Cached product data can therefore be stale for up to approximately 60 seconds.

### 📊 Cache Performance Results

| Metric | Result |
| ------ | ------ |
| Cache Hits | 2 |
| Cache Misses | 1 |
| Total Requests | 3 |
| Cache Hit Ratio | 66.67% |
| Average Cache Latency | 1.36 ms |
| Average Database Latency | 62.78 ms |
| Latency Improvement | 97.83% |
| Product Cache TTL | 60 seconds |

### 🛡️ Cache Stampede Protection

A Redis-based distributed lock was implemented for the `products` cache key.

When multiple requests arrive while the cache is empty or expired:

1. The first request acquires the Redis lock.
2. It fetches the product data from PostgreSQL.
3. The data is stored in Redis.
4. The remaining requests wait for the cache to be populated.
5. Subsequent requests read the newly populated data from Redis.

This prevents multiple concurrent requests from independently querying the database for the same popular cache key.

---

## ✅ Day 13 – Cache Invalidation Routing Backend

- Designed and implemented a reliable Redis cache invalidation strategy for product data
- Identified database write operations that can make cached product data stale
- Mapped product create, update and delete operations to the affected `products` cache key
- Created a reusable cache invalidation utility for centralized cache eviction
- Integrated cache invalidation into product create operations
- Integrated cache invalidation into product update operations
- Integrated cache invalidation into product delete operations
- Ensured the products cache is removed immediately after successful database write operations
- Prevented stale product data from being served after create, update and delete operations
- Used precise cache-key invalidation to avoid unnecessary eviction of unrelated cache entries
- Verified cache invalidation using Redis/Memurai CLI
- Verified that the `products` Redis key is removed after product creation
- Verified that the `products` Redis key is removed after product updates
- Verified that the `products` Redis key is removed after product deletion
- Verified that a subsequent product request retrieves the latest database state and rebuilds the cache
- Verified that subsequent requests are served from the refreshed Redis cache
- Configured bounded cache staleness using a 60-second Redis TTL
- Verified Redis TTL countdown using Memurai CLI
- Confirmed TTL reduction from 51 seconds to 34 seconds during validation
- Documented cache invalidation behavior and staleness boundaries
- Successfully tested end-to-end database write → cache invalidation → fresh data → cache rebuild flow

### 🔄 Cache Invalidation Strategy

The application uses a **cache-aside strategy** with Redis for hot, read-heavy product data.

### Cache Key Mapping

| Database Operation | Affected Cache Key | Invalidation Strategy |
| ------------------ | ------------------ | --------------------- |
| Create Product | `products` | Delete entire product-list cache |
| Update Product | `products` | Delete entire product-list cache |
| Delete Product | `products` | Delete entire product-list cache |

### Why `products` Is Invalidated

The `/api/products` endpoint caches the complete product collection under:

```text
products

---


# 🚀 Current Status

**Phase 1 Progress:** **Day 13 Completed**

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
- Data Seeding
- Relational Data Fetching
- Prisma Include Queries
- Cascade & Restrict Relationships
- API Response Caching
- Node Cache
- Pagination
- Query Optimization
- Performance Monitoring
- Socket.io
- Real-Time Communication
- WebSocket Events
- Socket.io Rooms
- Room Broadcasting
- Automatic Reconnection Handling
- BullMQ
- ioredis
- Redis / Memurai
- Background Job Processing
- Job Queues
- BullMQ Workers
- Automatic Job Retries
- Retry Backoff
- Job Progress Tracking
- Queue-Based Architecture
- Redis-Based API Caching
- Cache-Aside Strategy
- Redis TTL
- Cache Hit/Miss Metrics
- Cache Latency Monitoring
- Database Latency Monitoring
- Cache Hit Ratio
- Cache Stampede Protection
- Redis Distributed Lock
- Cache Freshness Strategy
- Cache Invalidation
- Write-Triggered Cache Eviction
- Product Cache Invalidation
- Cache Key Mapping
- Cache Data Consistency
- Bounded Cache Staleness


### ⏳ Upcoming Features

- Role-Based Authorization
- Global Error Handling
- Logging
- API Documentation (Swagger)
- Production Deployment
- Unit Testing
- Integration Testing

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
- Database Seeding
- Relational Database Modeling
- Transactions
- Authentication & Authorization
- JWT Authentication
- Password Hashing
- Express Middleware
- Request Validation
- Express Validator
- API Optimization
- Response Caching
- Redis-Based Caching
- Cache-Aside Strategy
- Redis TTL
- Cache Hit & Miss Metrics
- Cache Performance Monitoring
- Cache Stampede Protection
- Distributed Cache Locking
- Cache Invalidation
- Write-Triggered cache invalidation
- Cache Key Management
- Cache Freshness & Data Consistency
- Bounded Cache Staleness
- Pagination
- Query Optimization
- Socket.io
- WebSocket Communication
- Real-Time Event Handling
- Socket.io Rooms
- Room Broadcasting
- Client Reconnection
- Scalable Real-Time Architecture
- BullMQ
- Redis / Memurai
- ioredis
- Background Job Processing
- Job Queues & Workers
- Retry Mechanisms
- Job Progress Tracking
- Asynchronous Task Processing
- Queue-Based Architecture
- Backend Security Best Practices
- API Design
- Git & GitHub Workflow

---

# 👩‍💻 Author

**Meghana M.**

Computer Science Graduate | Backend Developer (Node.js) | Aspiring Software Engineer

GitHub: https://github.com/meghanam-7
