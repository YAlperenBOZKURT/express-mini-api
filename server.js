const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth", authRoutes); // localhost:8000/api/auth/register

connectDB();


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


