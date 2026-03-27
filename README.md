<div align="center">

<!-- ============================================================ -->
<!--           PROJECT LOGO / BANNER IMAGE                        -->
<!-- Replace the src below with your actual banner/logo image     -->
<!-- ============================================================ -->
<img src="https://www.shutterstock.com/image-illustration/airbnb-logo-on-dark-background-260nw-2317848677.jpg" alt="Project Banner" width="100%" />

<br/>
<br/>

# 🚀 Air Bnb Clone Project

### A powerful, scalable RESTful API built with Node.js & Express.js

<br/>

<!-- =====================  BADGES  ============================= -->

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square)
![Maintained](https://img.shields.io/badge/Maintained-Yes-green?style=flat-square)

</div>

---

## 📋 Table of Contents

- [📖 About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [🚀 Running the App](#-running-the-app)
- [📡 API Endpoints](#-api-endpoints)
- [🖼️ Screenshots](#️-screenshots)
- [🔒 Authentication](#-authentication)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Author](#-author)

---

## 📖 About The Project

<!-- ============================================================ -->
<!--           PROJECT OVERVIEW IMAGE                             -->
<!-- Replace src with your project overview / intro screenshot    -->
<!-- ============================================================ -->
<img src="image02.jpg" alt="Project Overview" width="100%" />

> A full-featured **Express.js** web application / REST API designed as a major project, implementing best practices for backend development including clean architecture, JWT authentication, middleware chaining, error handling, and MongoDB integration.

This project demonstrates:
- Clean **MVC Architecture** with separation of concerns
- Secure **JWT-based Authentication & Authorization**
- Full **CRUD Operations** via RESTful API design
- Input **Validation & Error Handling** middleware
- **Environment-based Configuration** management
- **MongoDB** database integration with Mongoose ODM

---

## ✨ Features

| Feature | Status |
|---|---|
| 🔐 User Registration & Login | ✅ Done |
| 🔑 JWT Authentication | ✅ Done |
| 🛡️ Role-based Authorization | ✅ Done |
| 📦 CRUD Operations | ✅ Done |
| ✅ Input Validation | ✅ Done |
| 🗄️ MongoDB Integration | ✅ Done |
| 🌍 RESTful API Design | ✅ Done |
| ⚡ Error Handling Middleware | ✅ Done |
| 🔒 Password Hashing (bcrypt) | ✅ Done |
| 🌐 CORS Enabled | ✅ Done |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Runtime** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat) |
| **Framework** | ![Express](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=flat) |
| **Database** | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat) |
| **ODM** | ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white&style=flat) |
| **Auth** | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=flat) |
| **Security** | ![bcrypt](https://img.shields.io/badge/-bcrypt-blue?style=flat) |
| **Validation** | ![Joi](https://img.shields.io/badge/-Joi%20%2F%20express--validator-purple?style=flat) |
| **Environment** | ![dotenv](https://img.shields.io/badge/-dotenv-ECD53F?logo=dotenv&logoColor=black&style=flat) |

---

## 📁 Project Structure

```
Express_Major_Project/
│
├── 📂 config/
│   ├── db.js               # MongoDB connection
│   └── config.js           # App configuration
│
├── 📂 controllers/
│   ├── authController.js   # Auth logic (register, login)
│   └── userController.js   # User CRUD logic
│
├── 📂 middleware/
│   ├── authMiddleware.js   # JWT verification
│   ├── errorHandler.js     # Global error handler
│   └── validate.js         # Input validation
│
├── 📂 models/
│   └── User.js             # Mongoose User schema
│
├── 📂 routes/
│   ├── authRoutes.js       # Auth routes
│   └── userRoutes.js       # User routes
│
├── 📂 utils/
│   └── helpers.js          # Utility functions
│
├── 📂 public/              # Static files
│
├── .env.example            # Environment variables template
├── .gitignore
├── app.js                  # Express app setup
├── server.js               # Server entry point
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js)
![npm](https://img.shields.io/badge/npm-v9+-CB3837?style=flat-square&logo=npm)
![MongoDB](https://img.shields.io/badge/MongoDB-v6+-47A248?style=flat-square&logo=mongodb)

```bash
node --version   # v18.x or higher
npm --version    # v9.x or higher
```

---

### Installation

**1. Clone the repository**

```bash
git clone origin https://github.com/saifullah857/Wonderlust-Website-Room-Booking-Website-MERN-Stack.git
cd Express_Major_Project
```

**2. Install dependencies**

```bash
npm install
```

---

### Environment Variables

Create a `.env` file in the root directory by copying the example:

```bash
cp .env.example .env
```

Fill in the values:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/express_major_project

# JWT
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d

# bcrypt
SALT_ROUNDS=10
```

---

## 🚀 Running the App

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will be running at: **`http://localhost:3000`**

<!-- ============================================================ -->
<!--         TERMINAL / RUNNING APP SCREENSHOT                    -->
<!-- Replace src with screenshot of your app running in terminal  -->
<!-- ============================================================ -->
<br/>
<img src="image03.jpg" alt="Server Running Screenshot" width="80%" />

---

## 📡 API Endpoints

### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login & get JWT token | ❌ |
| `GET` | `/api/auth/logout` | Logout user | ✅ |

### 👤 User Routes — `/api/users`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/users` | Get all users | ✅ Admin |
| `GET` | `/api/users/:id` | Get single user | ✅ |
| `PUT` | `/api/users/:id` | Update user | ✅ |
| `DELETE` | `/api/users/:id` | Delete user | ✅ Admin |

> 💡 **Base URL:** `http://localhost:3000`
> All protected routes require `Authorization: Bearer <token>` header.

---

## 🖼️ Screenshots

<details>
<summary><strong>📌 Click to expand screenshots</strong></summary>
<br/>

### 🏠 Home / Dashboard

<!-- ============================================================ -->
<!--         HOME / DASHBOARD SCREENSHOT                          -->
<!-- Replace src with your actual dashboard screenshot            -->
<!-- ============================================================ -->
<img src="./images/dashboard.png" alt="Dashboard Screenshot" width="100%" />

<br/>

### 🔐 Login Page

<!-- ============================================================ -->
<!--         LOGIN PAGE SCREENSHOT                                -->
<!-- Replace src with your login page screenshot                  -->
<!-- ============================================================ -->
<img src="image.png" alt="Login Page Screenshot" width="100%" />

<br/>

### 📋 API Response (Postman / Thunder Client)

<!-- ============================================================ -->
<!--         API RESPONSE SCREENSHOT (e.g., Postman)              -->
<!-- Replace src with your API test tool screenshot               -->
<!-- ============================================================ -->
<img src="image04.jpg" alt="API Response Screenshot" width="100%" />

<br/>



</details>

---

## 🔒 Authentication

This project uses **JSON Web Tokens (JWT)** for stateless authentication.

```
1. User registers/logs in → Server returns a JWT token
2. Client stores token (localStorage / cookie)
3. Client sends token in Authorization header for protected routes
4. Server verifies token via authMiddleware
```

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🧪 Testing

Run tests with:

```bash
npm test
```

---

## 🤝 Contributing

Contributions are always welcome! 🎉

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m 'Add some AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

---

## 📄 License

Distributed under the **MIT License**.

![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

See [`LICENSE`](./LICENSE) for more information.

---

## 👤 Author

<div align="center">



**Saif Ullah**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)

</div>

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ using Node.js & Express.js

</div>