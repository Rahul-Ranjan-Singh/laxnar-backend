import {app} from './app.js';
// const dotenv = require("dotenv");
import dotenv from 'dotenv';
import {connectDatabase} from './config/database.js';
//config

dotenv.config({ path: "config/config.env" });

connectDatabase();


//create product route
import {product_route} from './routes/ProductRoute.js';
app.use('/api/product', product_route);

app.get("/", (req, res)=>{
  res.status(200).send({ success: true, msg: "Welcome to Laxnar Enterprises Lucknow Backend"});
})

//create category route
import product_category_routes from './routes/ProductCategoryRoute.js';
app.use('/api/category', product_category_routes);

app.listen(process.env.PORT, () => {
  console.log("Server is working on fine");
});
