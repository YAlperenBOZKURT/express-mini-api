const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
          id: decoded.id,
          role: decoded.role
        };
        console.log(req.user);

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = auth;