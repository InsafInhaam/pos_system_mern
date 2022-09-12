const { reset } = require('nodemon');
const User = require('../models/Admin');

exports.register = async (req, res, next) => {
    const { email, password } = req.body;  
    
    try {
        const user = await User.create({
            email, password
        });

        res.status(201).json({
            success: true,
            Admin
        })
    } catch (error) {
        reset.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.login = (req, res, next) => {
    res.send("Login Route");
};

exports.forgotPassword = (req, res, next) => {
    res.send("Forgot Password Route");
};

exports.resetPassword = (req, res, next) => {
    res.send("Reset Password Route");
};