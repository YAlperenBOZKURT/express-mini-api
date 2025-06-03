# Express Mini API

A simple backend API built with **Node.js** and **Express.js**, featuring JWT-based user authentication, MongoDB integration, and middleware architecture. This project was developed for learning and experimentation purposes.

## 🚀 Features

- RESTful API using Express.js
- MongoDB integration via Mongoose
- User registration and login with JWT authentication
- Password hashing using bcrypt
- Environment variable management with dotenv
- CORS enabled
- Auto-reloading during development with Nodemon

## 📦 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- [Nodemon](https://nodemon.io/)

## 🛠️ Installation

````
1. Clone the repository:

   ```bash
   git clone https://github.com/YAlperenBOZKURT/express-mini-api.git
   cd express-mini-api


2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:8000`

## 📁 Project Structure

```
express-mini-api/
├── config/           # Database connection
├── controllers/      # Request handlers
├── middleware/       # Custom middlewares (e.g. auth)
├── models/           # Mongoose schemas
├── routes/           # Express route definitions
├── server.js         # App entry point
├── .env              # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md
```

## 📌 API Endpoints (Example)

### Auth Routes

| Method | Endpoint     | Description                            |
| ------ | ------------ | -------------------------------------- |
| POST   | `/register`  | Register a new user                    |
| POST   | `/login`     | Log in an existing user                |
| GET    | `/protected` | Access protected data (requires token) |

> Headers: `Authorization: Bearer <token>`

## 🧑‍💻 Author

**Yusuf Alperen Bozkurt**

## 📄 License

This project is licensed under the ISC License.

---

> This project is for educational purposes. Contributions and suggestions are welcome!

````

---


