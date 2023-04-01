var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
    category_name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Category", categorySchema);