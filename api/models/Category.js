const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    color: {
        type:String,
        required: true,
    },
    image: {
        type:String,
    },
    postDate: {
        type: Date,
        default: Date.now,
    },
});

const category = mongoose.model("Category",CategorySchema);

module.exports = category;