const express = require("express");
const category_route = express();

const bodyParser = require("body-parser");
category_route.use(bodyParser.json());
category_route.use(bodyParser.urlencoded({extended: true}));


const product_category_controller = require("../controllers/productcategoryController");

category_route.post('/add-category', product_category_controller.add_category);

module.exports = category_route;