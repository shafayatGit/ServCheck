# 🌟 ServCheck - Service Review Application System

Welcome to **ServCheck**, a dynamic platform for reviewing and managing service-based businesses. Whether you're a service provider or a customer, ServCheck allows you to share, explore, and manage services and their experiences all in one place.

🚀 **Live Website**: [https://servcheck-3aac5.web.app/](https://servcheck-3aac5.web.app/)

---

## 🎯 Project Purpose

ServCheck empowers users to:

- Share their service experiences with reviews and ratings.
- Explore diverse services through search, filter, and detailed information.
- Manage their own services and reviews securely.
- Enjoy a smooth and professional user experience with modern UI and animations.

---

## 🔑 Key Features

### ✅ User Capabilities

- **Add/Update/Delete Services** _(private routes)_
- **Add/Edit/Delete Reviews** with rating and feedback
- **Browse Services** and see full service details
- **My Services Page** and **My Reviews Page** for personal management
- **Secure Authentication** (Email/Password + Google login)
- **JWT Authentication** for securing API endpoints
- **Responsive Design** across mobile, tablet, and desktop

---

## 💻 Technologies Used

### 📌 Frontend

- React
- React Router DOM
- Tailwind CSS (with [shadcn/ui](https://ui.shadcn.com/) components)
- Framer Motion (animations)
- React CountUp
- React Toastify / SweetAlert
- React Rating
- Axios & JWT decode

### 📌 Backend

- Express.js
- MongoDB with Mongoose
- CORS & dotenv for environment security
- JSON Web Token (JWT) Authentication
- Cookie-parser

---

## 🔒 Security & Best Practices

- ✅ **Firebase keys** are secured using environment variables (`.env`)
- ✅ **MongoDB credentials** secured with server-side environment variables
- ✅ **JWT-based route protection** for all sensitive actions (POST, PATCH, DELETE)
- ✅ **Domain whitelisted in Firebase** for secure auth in production
- ✅ **CORS errors prevented** through proper origin configuration

---

## 📄 Pages Overview

### 🏠 Home Page

- Carousel with dynamic slides
- 6 Featured Services using `limit()`
- Meet Our Partners section
- 2 Extra Sections: Platform Statistics (CountUp), Why Choose Us

### 🔐 Authentication Pages

- **Login** (Email/Password & Google)
- **Register** (Name, Email, Password, PhotoURL)
- Password validation with toast feedback

### 📦 Add Service Page _(Private Route)_

- Create a service with image, title, company, category, etc.
- Service stored in DB with logged-in user info

### 📋 All Services Page

- Search by title/category/company
- Filter by category (dropdown)
- Dynamic card-based layout

### 🔍 Service Details Page

- Full service info
- Post reviews with rating & textarea
- View total review count
- Reviews show reviewer name, photo, date

### 🛠️ My Services Page _(Private)_

- Table view of created services
- Edit/Delete via modals

### 💬 My Reviews Page _(Private)_

- List of reviews with title, rating, text
- Edit/Delete using modals
- Service title is **read-only**

### ⚙️ Others

- ✅ 404 Not Found Page
- ✅ Dynamic Page Titles using `react-helmet`
- ✅ Spinners on load using custom and library options

---

## ✨ Bonus Features

- 🔎 **Search & Filter Services**
- ⏫ **React CountUp** for users, services, and reviews stats
- 🛡️ JWT secured backend
- 🎨 Beautiful, non-generic design (No Gobindo UI!)

---
## 🚀 How to Run This Project Locally

Follow the steps below to run this project on your local machine:

### 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### 📦 Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
