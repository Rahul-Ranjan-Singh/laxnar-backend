const Product = require("../models/productModel");





const add_product = async (req, res)=>{
    try{
        console.log("asjkd;")
        const {name , description,category, applications, technical_features, advantages} = req.body;
        var arrImages = [];
        for(let i = 0; i<req.files.length; i++){
            arrImages[i]= req.files[i].filename;
        }


        var product = {
            name,
            description,
            category,
            image: arrImages,
            applications,
            technical_features,
            advantages
        };

        const product_data = await Product.create(product);
        res.status(200).send({success: true, msg: "Product Details", data: product_data});
    }
    catch(err){
        res.status(400).send({ success: false, msg: err.message});
    }
}


// get-products method
const get_products = async(req, res)=>{
    try {
        var send_data = [];
        var get_all_products = await Product.find();
        if(get_all_products.length > 0){

            res.status(200).send({ success: true, msg: "Products", data: get_all_products});
        }
        else{
            res.status(200).send({ success: false, msg: "No Products are Available", data: send_data});
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message});
    }
}


module.exports = {
    add_product,
    get_products
}