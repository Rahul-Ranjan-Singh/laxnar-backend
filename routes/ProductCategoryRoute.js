import express from 'express';
const category_route = express();

import bodyParser from 'body-parser';
category_route.use(bodyParser.json());
category_route.use(bodyParser.urlencoded({extended: true}));


import product_category_controller from '../controllers/productcategoryController.js';

category_route.post('/add-category', product_category_controller.add_category);

category_route.get('/get-category', product_category_controller.get_category);

export default category_route;