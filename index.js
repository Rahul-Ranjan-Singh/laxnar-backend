import {app} from './app.js';
import cors from 'cors'
import dotenv from 'dotenv';
import {connectDatabase} from './config/database.js';
import product_category_routes from './routes/ProductCategoryRoute.js';
import {product_route} from './routes/ProductRoute.js';
import {enquiryRoute} from './routes/enquiryRoute.js'

//config
dotenv.config({ path: "config/config.env" });

app.use(cors({
  origin: "*"
}))

connectDatabase();



//create product route
app.use('/api/product', product_route);


app.get("/", (req, res)=>{
  res.status(200).send({ success: true, msg: "Welcome to Laxnar Enterprises Lucknow Backend"});
})

//create category route
app.use('/api/category', product_category_routes);

//Enquiry Route
app.use('/api/support/enquiry', enquiryRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is working on fine");
});
