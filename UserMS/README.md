# UserMS

*Full-Stack Application with Angular Frontend and Node.js Backend*

---

## Project Description

This project includes the following features.
 - Login/register page with social login.
 - Admin panel with crude operation.
 - Filters operations like sort and pagination (on the server side).

---

## Versions

* **Angular**: 13.2.0
* **Node.js**: 22.14.0

---

# Frontend (Angular)
## Steps to Run

1. Go to the `FE` folder:

   ```bash
   cd FE
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the application:

   ```bash
   ng serve
   ```
4. Open your browser and navigate to:

   ```
   http://localhost:4200
   ```

## Used Technologies

* **Angular 13**
* **TypeScript**
* **RxJS**
* **Angular Material / Bootstrap**
* **SCSS**

---

# Backend (Node.js)
## Steps to Run

1. Go to the `BE` folder:

   ```bash
   cd BE
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure environment variables:

   * Create a `.env` file and add the following:

     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
4. Start the server:

   ```bash
   npm run dev
   ```
5. Server will be available at:

   ```
   http://localhost:5000
   ```

## Used Technologies

* **Node.js 22**
* **Express.js**
* **MongoDB** with **Mongoose**
* **JWT** for authentication
* **bcryptjs** for password hashing
* **dotenv** for environment variables
* **Nodemon** for development
* **CORS**

---
