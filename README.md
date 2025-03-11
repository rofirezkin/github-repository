# 🚀 React Vite Application - Optimized, Scalable, and Fully Tested

Welcome to this **React Vite** project! This application is designed with **performance, scalability, and maintainability** in mind, making it an excellent foundation for modern web development.

This project leverages:
- ✅ **Vite.js** – A superfast build tool for lightning-fast development
- ✅ **React.js** – The most popular JavaScript library for building user interfaces
- ✅ **TanStack Query (React Query)** – Efficient API data fetching and state management
- ✅ **Tailwind CSS** – Utility-first styling for rapid UI development
- ✅ **Vitest** – Blazing fast unit testing for ensuring app reliability
- ✅ **Yarn** – A fast and reliable package manager

---

## **🛠️ Getting Started**

### **1️⃣ Install Dependencies**
Before running the project, ensure all dependencies are installed:

```sh
yarn install
```

### **2️⃣ Run the Development Server**
To start the Vite development server and access the app locally:

```sh
yarn run dev
```

By default, the application will be available at:  
🌐 **http://localhost:5173/**

---

## **🧪 Running Unit Tests**
Testing is an essential part of building reliable applications. This project includes **unit tests** to ensure that components and functions work correctly.

### **Run All Tests**
```sh
yarn run test
```

### **Run Tests in Watch Mode**
For continuous testing while coding, use:
```sh
yarn run test:watch
```

### **Run Tests in Debug Mode**
For debugging failing tests, use:
```sh
yarn run test --debug
```

### **📌 Testing Tools Used**
- **Vitest** – A fast unit testing framework for Vite projects
- **@testing-library/react** – Ensures UI components behave correctly
- **@testing-library/user-event** – Simulates real user interactions

---

## **📂 Project Structure**
```
/src
  /components       # Reusable UI components
    /accordion      # Accordion component
      accordion.tsx
      __tests__/accordion.test.tsx
  /hooks            # Custom React hooks
    useGetUserRepos.ts
    useGetSearchUser.ts
  /pages            # Application pages
    home.tsx
    __tests__/home.test.tsx
  /apis             # API request handlers
    get.user-repos.ts
    get.search-user.ts
  /config           # Configuration files (Axios, React Query)
  /styles           # Tailwind CSS global styles
  /tests            # Test setup and utilities
    setup.ts
  main.tsx
  App.tsx
```
Each folder serves a specific purpose, ensuring **clean architecture** and easy maintenance.

---

## **⚡ Features**
- ✅ **Vite for ultra-fast development and build times**
- ✅ **TanStack Query for efficient API data fetching**
- ✅ **Tailwind CSS for easy and modern styling**
- ✅ **Reusable, modular, and scalable component structure**
- ✅ **Unit and integration testing with Vitest**
- ✅ **Yarn package management for dependency consistency**

---




## **👤 Author**
🔹 **Rofi Rezkin**  
📧 rofirezkin@gmail.com  
