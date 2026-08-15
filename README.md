# 🚀 PlaceMux Node.js Backend – Phase 1

## 📖 Overview

This project was created as part of the **PlaceMux (Altrodav Technologies) Phase 1 Industry Immersion Program**.

The objective of this project is to build a clean, scalable, and industry-standard Node.js backend using **Express.js**, while following professional software development practices.

Throughout this journey, the project evolves from a basic Express server into a complete backend application featuring modular architecture, RESTful APIs, PostgreSQL database integration, Prisma ORM, repository-based persistence, secure authentication, request validation, API optimization, real-time communication with Socket.io, middleware, and production-ready backend practices.

---

# 🛠 Tech Stack

- Node.js
- Node.js Worker Threads
- Node.js Cluster
- Express.js
- Socket.io
- Socket.io Client
- PostgreSQL
- Prisma ORM
- bcrypt
- JSON Web Token (JWT)
- Helmet
- Express Rate Limit
- rate-limit-redis
- Express Validator
- CORS
- Node Cache
- dotenv
- Nodemon
- Git & GitHub
- Postman
- BullMQ
- ioredis
- Redis / Memurai
- Autocannon
- Connect Timeout

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
│   │   ├── mockController.js
│   │   └── workerController.js
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
│   │   ├── jobRoutes.js
│   │   └── workerRoutes.js
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
│   │   ├── redisCache.js
│   │   └── workerPool.js
│   │
│   ├── workers
│   │   ├── emailWorker.js
│   │   └── cpuWorker.js
│   │
│   ├── app.js
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
| GET | `/api/worker/cpu?number=35` | Executes a CPU-intensive Fibonacci calculation using a Worker Thread pool |
| GET | `/api/worker/health` | Verifies that the main Node.js event loop remains responsive during CPU-intensive work |

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
- Product create, update, and delete operations invalidate the `products` cache after successful database modifications.
- Cache invalidation ensures that subsequent product requests retrieve the latest database state and rebuild the Redis cache.
- Cache stampede protection ensures that when the cache expires, concurrent requests do not trigger multiple database queries.
- The `products` cache uses a 60-second TTL as an additional bounded-staleness mechanism.

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
```

---

## ✅ Day 14 – High-Throughput Performance & Request Mapping

- Analyzed API performance under increasing concurrent traffic
- Installed and configured Autocannon for HTTP load testing
- Established a baseline performance benchmark for the Products API
- Load-tested the `/api/products` endpoint with 10 concurrent connections
- Load-tested the API with 50 and 100 concurrent connections
- Performed stress testing with 200 concurrent connections
- Measured requests per second, average latency, p99 latency and response throughput
- Monitored Node.js process CPU and memory usage during high-concurrency tests
- Identified practical throughput limits under increasing concurrent traffic
- Implemented Node.js Cluster for horizontal scaling
- Configured a primary process with multiple worker processes
- Successfully started 4 Node.js worker processes
- Distributed incoming requests across multiple worker processes
- Verified multi-worker request handling on port 3000
- Implemented request timeout handling using Connect Timeout
- Configured a 10-second request timeout
- Implemented graceful degradation for slow requests
- Returned `503 Service Unavailable` for requests exceeding the configured timeout
- Preserved successful responses for normal API requests
- Verified normal API requests continue returning `200 OK` during timeout testing
- Compared single-process and multi-worker performance under concurrent load
- Performed resource monitoring across clustered worker processes
- Documented throughput, latency and resource utilization observations
- Successfully validated high-concurrency request handling, horizontal scaling and graceful degradation

## 📊 Day 14 — High-Throughput Performance Results

### Load Testing

Load testing was performed using Autocannon against:

`GET /api/products`

| Test | Connections | Duration | Avg Req/Sec | Avg Latency | p99 Latency | Result |
|------|-------------|----------|-------------|-------------|-------------|--------|
| Baseline | 10 | 10s | 3,528 | 2.35 ms | 5 ms | ✅ Stable |
| High Concurrency | 100 | 10s | 1,855.1 | 53.59 ms | 144 ms | ✅ Stable |
| Stress Test | 200 | 10s | 1,819.5 | 110.19 ms | 303 ms | ✅ Stable |

### Resource Monitoring

The application was configured with a 4-worker Node.js cluster.

- 4 worker processes were successfully started.
- Idle worker memory usage was approximately 58–65 MB per worker.
- During a 100-connection load test, one worker reached 170% CPU usage and approximately 124 MB working memory in the captured snapshot.
- No request errors were reported during the completed load tests.

### Graceful Degradation

A 10-second request timeout was implemented to prevent excessively slow requests from occupying server resources indefinitely.

Slow requests are terminated with:

`503 Service Unavailable`

Normal requests continue to return:

`200 OK`

### Capacity Observation

The application successfully handled up to 200 concurrent connections during local stress testing.

As concurrency increased from 100 to 200 connections, average latency increased from approximately 54 ms to 110 ms, while throughput remained around 1.8k requests/sec.

This indicates that the current local environment reaches a practical throughput limit under higher concurrency, while graceful degradation and request protection prevent uncontrolled request buildup.

---

## ✅ Day 15 – Distributed Rate Limiting & CORS Security

- Enhanced API rate limiting for clustered Node.js workers
- Installed and configured `rate-limit-redis`
- Integrated `express-rate-limit` with Redis
- Configured Redis as the shared rate-limit store
- Applied the shared Redis-backed rate limiter to `/api` routes
- Configured a general API limit of 100 requests per minute
- Configured a stricter authentication limit of 10 requests per 15 minutes
- Applied authentication rate limiting specifically to login requests
- Verified that rate-limit state is shared across multiple Node.js cluster workers
- Verified that requests 1–100 are accepted under the general API limit
- Verified that requests exceeding the 100-request limit return `429 Too Many Requests`
- Verified that authentication requests 1–10 are processed normally
- Verified that authentication requests exceeding the configured limit return `429 Too Many Requests`
- Verified `Retry-After` and standard rate-limit headers
- Added CORS middleware using the `cors` package
- Configured CORS to allow requests from the approved frontend origin
- Verified successful CORS responses using the `Access-Control-Allow-Origin` header
- Verified that unapproved origins do not receive the `Access-Control-Allow-Origin` header
- Combined Redis-backed rate limiting with Node.js Cluster for shared request protection
- Successfully tested distributed rate limiting and CORS behavior using terminal and `curl`

## 📊 Day 15 — Distributed Rate Limiting & CORS Results

### Redis-Backed API Rate Limiting

The application uses Redis as the shared storage backend for `express-rate-limit`.

This is important because the application runs using multiple Node.js cluster workers.

Instead of each worker maintaining an independent in-memory request counter, all workers use the same Redis-backed rate-limit store.

### General API Rate Limit

| Configuration | Value |
|------|------|
| Window | 1 minute |
| Maximum Requests | 100 |
| Storage | Redis |
| Exceeded Response | `429 Too Many Requests` |

The `/api` routes are protected by the general API rate limiter.

Testing confirmed:

```text
Requests 1–100  → 200 OK
Requests 101+   → 429 Too Many Requests
```
---

## Day 16 – Load Testing & Stress Analysis

### Objective

Performed load, stress, and soak testing on the Node.js backend to evaluate system capacity, latency, throughput, error behavior, and long-running stability.

### Testing Tool

- autocannon
- Node.js Cluster with 4 workers
- Redis-backed caching
- Redis-backed rate limiting

### Baseline API Testing

#### GET /api/products

10 concurrent connections for 10 seconds:

- Average latency: 4.58 ms
- P99 latency: 17 ms
- Average throughput: 1,987 req/s
- Total requests: ~20,000

#### GET /api/orders

10 concurrent connections for 10 seconds:

- Average latency: 7.72 ms
- P99 latency: 18 ms
- Average throughput: 1,216 req/s
- Total requests: ~12,000

#### GET /api/orders/details

10 concurrent connections for 10 seconds:

- Average latency: 7.57 ms
- P99 latency: 21 ms
- Average throughput: 1,240 req/s
- Total requests: ~12,000

### Stress Testing

#### 50 Concurrent Connections

- Duration: 30 seconds
- Average latency: 18.08 ms
- P99 latency: 48 ms
- Throughput: ~2,689 req/s
- Total requests: ~81,000

#### 100 Concurrent Connections

- Duration: 30 seconds
- Average latency: 66.85 ms
- P99 latency: 139 ms
- Throughput: ~1,490 req/s
- Total requests: ~45,000

#### 200 Concurrent Connections

- Duration: 30 seconds
- Average latency: 78.46 ms
- P99 latency: 197 ms
- Throughput: ~2,527 req/s
- Total requests: ~76,000

#### 300 Concurrent Connections

- Duration: 30 seconds
- Average latency: 83.81 ms
- P99 latency: 241 ms
- Throughput: ~3,561 req/s
- Total requests: ~107,000
- Some non-2xx responses observed under high request volume

#### 500 Concurrent Connections

- Duration: 30 seconds
- Average latency: 187.71 ms
- P99 latency: 442 ms
- Throughput: ~2,664 req/s
- Total requests: ~80,000
- Increased latency and reduced stability observed

### Soak Testing

#### 50 Concurrent Connections for 5 Minutes

- Duration: 300 seconds
- Total requests: ~476,000
- Average latency: 31.04 ms
- P99 latency: 50 ms
- Maximum latency: 212 ms
- Average throughput: ~1,591 req/s

The backend remained responsive during the 5-minute sustained-load test without obvious progressive latency degradation.

### Resource Analysis

During high-concurrency testing:

- Node.js worker CPU utilization increased significantly.
- Individual workers reached approximately 100–140% CPU utilization.
- Some workers showed increased memory consumption.
- No continuous system-wide memory growth sufficient to conclude a memory leak was observed.

The observed behavior indicates that CPU/event-loop processing pressure becomes an important limiting factor at high concurrency.

### Capacity Findings

The backend performs well under low-to-moderate concurrency.

Latency increases significantly as concurrency approaches 100–500 simultaneous connections.

The 5-minute soak test demonstrated stable behavior at 50 concurrent connections.

For the current local environment, approximately 50 concurrent connections provides a more stable operating range, while higher concurrency should be treated as stress conditions rather than normal operating capacity.

### Recommendations

- Profile CPU-heavy endpoints using Node.js profiling tools.
- Monitor event-loop delay in production.
- Continue using Redis for shared caching and rate limiting.
- Use horizontal scaling when traffic increases.
- Monitor CPU, memory, Redis, and database utilization.
- Establish production latency and throughput SLOs.
- Use a reverse proxy/load balancer for distributed deployments.
- Repeat load testing after major performance changes.

### Conclusion

Task 16 successfully evaluated backend behavior under baseline, stress, and sustained load.

The backend demonstrated strong throughput under moderate concurrency and remained stable during a 5-minute soak test. High-concurrency testing revealed increasing latency and CPU pressure, identifying the current performance boundary and providing a baseline for future optimization and scaling.

---

## ✅ Day 17 – Worker Threads Backend

- Identified CPU-intensive Fibonacci computation as a CPU-bound operation
- Implemented CPU-intensive computation using Node.js Worker Threads
- Created a dedicated `cpuWorker.js` worker for heavy computation
- Implemented message passing between the main process and worker threads using `parentPort`
- Created a reusable `WorkerPool` class to manage worker threads
- Configured a worker pool with 2 worker threads
- Implemented task queueing when all workers are busy
- Implemented worker availability tracking using busy/idle state
- Implemented automatic worker replacement after worker errors
- Added Promise-based task handling for worker results
- Added unique task IDs for tracking worker tasks
- Created `workerController.js` for CPU-intensive API requests
- Created `workerRoutes.js` for Worker Thread APIs
- Added `/api/worker/cpu` endpoint for CPU-intensive Fibonacci computation
- Added `/api/worker/health` endpoint to verify main event-loop responsiveness
- Integrated Worker Thread routes into the Express application
- Verified Fibonacci correctness for `35` and `40`
- Verified Worker Thread execution latency for CPU-intensive operations
- Tested concurrent CPU-intensive requests using multiple parallel `curl` requests
- Verified worker-pool concurrency with 2 active workers
- Observed queued requests being processed as workers became available
- Verified that the main event loop remained responsive during heavy CPU computation
- Measured health-check response time of approximately 3–7 ms during CPU-intensive workloads
- Successfully demonstrated CPU-bound workload isolation from the main Node.js event loop

---

# 🚀 Current Status

**Phase 1 Progress:** **Day 17 Completed**

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
- Node.js Cluster
- Horizontal Scaling
- Multi-Worker Request Handling
- High-Concurrency Load Testing
- Autocannon Load Testing
- Resource Monitoring
- Request Timeout Handling
- Graceful Degradation
- Performance Benchmarking
- Concurrent Traffic Testing
- Redis-Backed Rate Limiting
- Distributed Rate Limiting
- Shared Rate-Limit State Across Cluster Workers
- API Request Rate Limiting
- Authentication Rate Limiting
- Rate-Limit Standard Headers
- Retry-After Handling
- CORS Configuration
- Cross-Origin Request Protection
- Baseline Load Testing
- Stress Testing
- Soak Testing
- Latency Percentile Analysis
- Throughput Analysis
- Capacity Boundary Analysis
- CPU & Memory Resource Analysis
- Performance Degradation Analysis
- Node.js Worker Threads
- CPU-Bound Task Offloading
- Worker Pool Architecture
- Worker Thread Message Passing
- Worker Task Queueing
- Worker Concurrency Control
- Worker Error Handling
- Automatic Worker Replacement
- Promise-Based Worker Task Handling
- CPU-Intensive Fibonacci Processing
- Event-Loop Responsiveness Testing
- Worker Thread Concurrency Testing
- CPU Workload Isolation

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
- Distributed Rate Limiting
- Redis-Backed Rate Limiting
- Shared Rate-Limit State
- Rate Limiting in Clustered Applications
- Node.js Worker Threads
- CPU-Bound Task Offloading
- Worker Pool Architecture
- Worker Thread Message Passing
- Worker Task Queueing
- Worker Concurrency Control
- Event-Loop Responsiveness
- CPU Workload Isolation
- CORS
- Cross-Origin Request Security
- Backend Security Best Practices
- API Design
- Git & GitHub Workflow

---

# 👩‍💻 Author

**Meghana M.**

Computer Science Graduate | Backend Developer (Node.js) | Aspiring Software Engineer

GitHub: https://github.com/meghanam-7
