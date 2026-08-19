# 🚀 PlaceMux Node.js Backend – Phase 1 - COMPLETED

## 📖 Overview

This project was created as part of the **PlaceMux (Altrodav Technologies) Phase 1 Industry Immersion Program**.

The objective of this project was to build a clean, scalable, secure, and industry-oriented Node.js backend using **Express.js**, while following professional software development and backend engineering practices.

Throughout Phase 1, the project evolved from a basic Express server into a complete backend application featuring:

- Modular and layered backend architecture
- RESTful API development
- PostgreSQL database integration
- Prisma ORM
- Repository-based persistence
- Database relationships and transactions
- Secure authentication and authorization
- Request validation
- API response caching
- Redis-based distributed caching
- Cache invalidation and stampede protection
- Background job processing with BullMQ
- Redis-backed job queues
- Node.js Cluster
- Node.js Worker Threads
- High-concurrency load and stress testing
- Distributed rate limiting
- CORS security
- JWT-authenticated WebSocket communication
- Socket.io rooms and real-time events
- Redis Adapter for clustered Socket.io
- Production environment protection
- Production configuration validation
- HTTPS enforcement
- Production-safe error handling
- OpenAPI / Swagger API documentation
- Automated integration testing
- Jest and Supertest testing
- PostgreSQL and Redis services for CI testing
- GitHub Actions continuous integration

Phase 1 concludes with a production-oriented Node.js backend that demonstrates backend architecture, persistence, security, performance optimization, asynchronous processing, real-time communication, automated testing, API documentation, and CI validation.

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- Node.js Cluster
- Node.js Worker Threads
- Socket.io
- Socket.io Client

### Database & ORM

- PostgreSQL
- Prisma ORM
- Prisma Client
- Prisma Migrations
- Prisma Transactions

### Authentication & Security

- bcrypt
- JSON Web Token (JWT)
- Helmet
- Express Rate Limit
- rate-limit-redis
- Express Validator
- CORS
- Production Environment Gating
- Production Configuration Validation
- HTTPS Enforcement
- Production-Safe Error Handling
- Role-Based Authorization

### Caching & Redis

- Redis
- Memurai
- ioredis
- Node Cache
- Redis Cache-Aside Strategy
- Redis TTL
- Redis Distributed Locking
- Cache Invalidation
- Cache Hit/Miss Metrics
- Cache Stampede Protection

### Background Processing

- BullMQ
- Redis
- BullMQ Workers
- Background Job Queues
- Retry and Backoff Processing
- Job Progress Tracking

### Real-Time Communication

- Socket.io
- JWT Socket Authentication
- Socket.io Rooms
- Redis Pub/Sub
- `@socket.io/redis-adapter`
- Clustered Socket.io Architecture

### Performance & Testing

- Autocannon
- Jest
- Supertest
- Node.js Performance Testing
- Load Testing
- Stress Testing
- Soak Testing
- Integration Testing
- Cache Performance Monitoring
- CPU and Memory Analysis

### API Documentation & Development

- OpenAPI / Swagger
- swagger-jsdoc
- swagger-ui-express
- Postman
- Nodemon
- dotenv
- Connect Timeout
- Compression

### CI / Version Control

- Git
- GitHub
- GitHub Actions
- Automated Integration Testing

---

# 📂 Project Structure

```text
task1-node-server
│
├── .github
│   └── workflows
│       └── test.yml
│
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   └── seed.js
│
├── src
│   ├── config
│   │   ├── prismaClient.js
│   │   ├── redisConnection.js
│   │   └── productionConfig.js
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
│   ├── docs
│   │   └── OpenAPI / Swagger documentation
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── authorizationMiddleware.js
│   │   ├── rateLimiter.js
│   │   ├── socketAuthMiddleware.js
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
│   ├── socket
│   │   ├── socketTestClient.js
│   │   └── socketTestClient2.js
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
├── tests
│   ├── setup.js
│   └── *.test.js
│
├── client.js
├── testCacheStampede.js
├── testRedisCache.js
├── jest.config.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

---

# 🌐 Available APIs

| Method | Endpoint | Access | Description |
| ------ | -------- | ------ | ----------- |
| GET | `/health` | Public | Check server health |
| GET | `/hello` | Development only | Sample API response |
| GET | `/api/users` | Authenticated | Returns paginated user data from PostgreSQL |
| GET | `/api/products` | Authenticated | Returns product data from PostgreSQL / Redis cache |
| GET | `/api/orders` | Authenticated | Returns order data from PostgreSQL |
| GET | `/api/users/orders` | Authenticated | Returns users with their orders |
| GET | `/api/orders/details` | Authenticated | Returns orders with user and product details |
| GET | `/api/products/orders` | Authenticated | Returns products with related orders |
| POST | `/api/products` | Admin | Creates a new product and invalidates the products cache |
| PUT | `/api/products/:id` | Admin | Updates an existing product and invalidates the products cache |
| DELETE | `/api/products/:id` | Admin | Deletes an existing product and invalidates the products cache |
| GET | `/api/cache/metrics` | Admin | Returns cache metrics |
| DELETE | `/api/cache/metrics` | Admin | Resets cache metrics |
| POST | `/auth/signup` | Public | Register a new user |
| POST | `/auth/login` | Public | Authenticate user and generate JWT |
| POST | `/api/jobs/email` | Authenticated | Adds an email-processing job to the BullMQ background queue |
| GET | `/api/worker/cpu?number=35` | Development only | Executes a CPU-intensive Fibonacci calculation |
| GET | `/api/worker/health` | Development only | Verifies main event-loop responsiveness |
| GET | `/api/docs` | PUBLIC | Opens the Swagger / OpenAPI API documentation |

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

## ✅ Day 18 – WebSockets & Real-time Events Backend

- Enhanced Socket.io architecture for production-oriented real-time communication
- Implemented JWT authentication for Socket.io connections
- Created dedicated Socket.io authentication middleware
- Validated JWT tokens during the Socket.io handshake
- Attached authenticated user information to the socket connection
- Rejected unauthenticated and invalid socket connections
- Implemented authenticated Socket.io client connections
- Implemented real-time welcome events
- Implemented bidirectional client-server messaging
- Implemented Socket.io room-based communication
- Implemented room joining and room broadcasting
- Tested multiple clients communicating through the same Socket.io room
- Configured Node.js Cluster with 4 worker processes for real-time connections
- Installed and configured `@socket.io/redis-adapter`
- Created dedicated Redis publisher and subscriber connections for Socket.io
- Integrated Redis Pub/Sub with Socket.io using the Redis adapter
- Configured the Redis adapter independently inside each cluster worker
- Verified Redis publisher and subscriber connections across all cluster workers
- Added worker-process logging for Socket.io connections and room activity
- Tested Socket.io authentication using JWT tokens generated by the existing login API
- Verified authenticated socket connection and welcome event delivery
- Verified room joining and room message broadcasting
- Verified multiple Socket.io clients receiving room broadcasts
- Verified Socket.io connection and disconnection handling
- Established a scalable real-time architecture using Node.js Cluster and Redis

---

## ✅ Day 19 – Production Route Locking Backend

- Audited all Express routes for authentication and authorization requirements
- Protected authenticated API routes using JWT authentication middleware
- Implemented role-based authorization using `requireRole()`
- Restricted product create, update, and delete operations to `ADMIN` users
- Restricted cache metrics access to `ADMIN` users
- Protected email job creation with JWT authentication
- Protected user, product, and order APIs with JWT authentication
- Added production environment gating for development-only routes
- Disabled `/hello` in production
- Disabled Worker Thread CPU testing endpoint in production
- Disabled Worker Thread health/debug endpoint in production
- Added production configuration validation
- Added required production environment checks
- Added production-safe global error handling
- Prevented internal error details from being exposed to production clients
- Added production HTTPS enforcement
- Configured Express `trust proxy` for production deployments behind a reverse proxy
- Maintained Helmet security headers
- Verified route syntax after security changes
- Verified authentication and authorization middleware integration
- Verified production-only route restrictions
- Completed a final production security pass

---

## ✅ Day 20 – API Documentation, Integration Testing & CI/CD

- Completed OpenAPI / Swagger API documentation
- Documented the implemented REST API endpoints
- Ensured Swagger documentation matches the actual API routes
- Verified that authentication and authorization requirements are reflected in the documentation
- Ensured no secrets or sensitive environment values are exposed in API documentation
- Added Jest integration testing configuration
- Added Supertest-based API integration tests
- Added test setup configuration
- Configured a dedicated test database environment
- Configured Prisma for integration-test database preparation
- Added GitHub Actions workflow for automated testing
- Created `.github/workflows/test.yml`
- Configured GitHub Actions to run on pushes to `main` and `master`
- Configured GitHub Actions to run for pull requests
- Added PostgreSQL service container for CI tests
- Added Redis service container for CI tests
- Configured CI environment variables for testing
- Installed dependencies using `npm ci` in CI
- Generated Prisma Client during CI
- Prepared the test database using Prisma
- Executed the Jest integration test suite automatically in GitHub Actions
- Verified the backend test workflow in a clean CI environment
- Performed final API and route verification
- Performed final authentication and authorization verification
- Performed final production configuration verification
- Removed temporary debugging logs from authentication and product persistence code
- Verified that sensitive values such as JWT secrets are not logged
- Completed final repository cleanup and verification
- Completed Phase 1

### 🧪 Integration Testing & CI

The project includes automated integration testing using Jest and Supertest.

The GitHub Actions workflow provisions PostgreSQL and Redis service containers, installs the project dependencies, generates the Prisma client, prepares the test database, and executes the integration test suite.

This provides a repeatable verification process for the backend whenever changes are pushed or submitted through a pull request.

### 📚 API Documentation

The backend API is documented using OpenAPI / Swagger.

The documentation reflects the implemented API routes and their authentication requirements.

No JWT secrets, database credentials, Redis credentials, or other sensitive environment values are included in the API documentation.

### 🏁 Phase 1 Completion

Day 20 marks the completion of Phase 1 of the PlaceMux Industry Immersion Program.

The backend has progressed from a basic Express.js server into a modular, database-backed, authenticated, cached, rate-limited, clustered, real-time and tested Node.js backend.

Phase 2 will continue development from this completed Phase 1 foundation in a separate repository.

---

# 🚀 Current Status

**Phase 1 Progress:** **Day 20 Completed — Phase 1 COMPLETE 🎉**

### ✅ Phase 1 Completed

The Phase 1 backend has been completed through Day 20.

The project now includes:

- Modular Express.js backend architecture
- PostgreSQL + Prisma persistence
- Repository pattern
- Authentication and JWT authorization
- Role-based access control
- Request validation
- Redis caching
- Cache invalidation
- Cache stampede protection
- Redis-backed distributed rate limiting
- Node.js Cluster
- Node.js Worker Threads
- Worker pool architecture
- BullMQ background jobs
- Socket.io real-time communication
- JWT-authenticated WebSockets
- Socket.io Redis adapter
- Production environment gating
- HTTPS enforcement
- Production-safe error handling
- CORS security
- API performance and load testing
- OpenAPI / Swagger documentation
- Jest + Supertest integration testing
- GitHub Actions CI testing
- PostgreSQL and Redis CI service containers
- Final security and repository verification

### 🎯 Phase 1 Completion

**Day 20 marks the completion of Phase 1.**

The completed Phase 1 backend will serve as the foundation for the next development phase.

### 🔜 Phase 2

Phase 2 will begin in a separate GitHub repository.

The completed Phase 1 backend will be used as the starting codebase for Phase 2, after which the new Phase 2 tasks will continue from the existing implementation.

### ⏳ Upcoming Features

Phase 1 is now complete.

The next development cycle will continue in a separate Phase 2 repository, beginning with Task 1 of Phase 2.

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
- JWT Socket Authentication
- Socket Authentication Middleware
- Authenticated WebSocket Connections
- Socket.io Redis Adapter
- Redis Pub/Sub
- Clustered WebSocket Architecture
- Multi-Worker Real-Time Communication
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
- Role-Based Authorization
- Production Environment Gating
- Production Configuration Validation
- HTTPS Enforcement
- Secure Error Handling
- Production Security Headers
- Route Access-Control Auditing
- Production Security Auditing

---

# 👩‍💻 Author

**Meghana M.**

Computer Science Graduate | Backend Developer (Node.js) | Aspiring Software Engineer

GitHub: https://github.com/meghanam-7
