# 📦 Product Catalog API

## **1. Project Description**

The **Product Catalog API** is a simple Node.js + Express application that provides product data through three API endpoints.
It also includes a basic frontend **index.html** page that fetches and displays product information using the /products endpoint.

### **Technologies Used**

Node.js
Express.js
HTML & CSS
JavaScript (Fetch API)
Git & GitHub

---

## **2. Project Structure**
project/
│
├── server.js
├── package.json
├── .gitignore
│
├── public/
│   └── index.html
│
└── README.md

---

## **3. API Documentation**

### **📌 GET /products**

**Method:** GET
**Description:** Returns a list of all products.

---

### **📌 GET /products/categories**

**Method:** GET
**Description:** Returns all unique product categories.

---

### **📌 GET /products/instock**

**Method:** GET
**Description:** Returns only the products that are currently in stock.

---

## **4. Installation & Setup Instructions**

### **📥 1. Clone the Repository**

git clone "https://github.com/ShadaAminaDK/product-catalog-api.git"
cd product-catalog-api

### **📦 2. Install Dependencies**

npm install

### **▶️ 3. Run the Server**

node server.js

Server will start on:
http://localhost:3000

### **🌐 4. Access the API**

All Products → `http://localhost:3000/products`
Categories → `http://localhost:3000/products/categories`
In-Stock Products → `http://localhost:3000/products/instock`

### **🖥️ 5. Access the Frontend**

Open in browser:
http://localhost:3000

---

## **5. GitHub Repository Link**
https://github.com/ShadaAminaDK/product-catalog-api.git


## **6. Author Information**

Name: Shada Amina DK
Project: Product Catalog API
Year: 2025