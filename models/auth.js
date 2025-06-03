const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;