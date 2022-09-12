const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number
    },
    image: {
        type: String
    },
    role: {
        type: number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: string,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        select: false
    },
    postDate: {
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});


AdminSchema.pre("save", async function () { 
    if (!this.isModified("password")) { 
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
})
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;