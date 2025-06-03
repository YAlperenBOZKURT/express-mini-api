    const express = require("express");
    const router = express.Router();
    const { registerUser, loginUser, deleteUser } = require("../controllers/auth");
    const authorizeRole = require("../middleware/authorizeRole");
    const auth = require("../middleware/auth");

    router.post("/register", registerUser);
    router.post("/login", loginUser);
    router.delete("/delete/:id", auth, authorizeRole("admin"), deleteUser);



    module.exports = router;