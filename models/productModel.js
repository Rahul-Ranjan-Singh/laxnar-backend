var mongoose = require("mongoose");

var productScheme = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: Array,
        required: true
    },
    applications:{
        type: Array,
        required: true
    },
    technical_features:{
        type: Array,
        required: true
    },
    advantages:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("product", productScheme);