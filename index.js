const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
//config

dotenv.config({ path: "config/config.env" });

connectDatabase();


//create product route
const product_routes = require("./routes/ProductRoute");
app.use('/api/product', product_routes);

//create category route
const product_category_routes = require("./routes/ProductCategoryRoute");
app.use('/api/category', product_category_routes);

app.listen(process.env.PORT, () => {
  console.log("Server is working on fine");
});
