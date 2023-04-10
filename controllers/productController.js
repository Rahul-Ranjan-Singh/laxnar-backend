import {Product} from '../models/productModel.js';





const add_product = async (downloadURL, res, req)=>{


    // try {
        // const dateTime = giveCurrentDateTime();

        // const storageRef = ref(storage, `files/${req.file.originalname + "       " + dateTime}`);

        // const metadata = {
        //     contentType: req.file.mimetype,
        // };

        // Upload the file in the bucket storage
        // const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        
    //     console.log('File successfully uploaded.');
        
    // } catch (error) {
    //     return res.status(400).send(error.message)
    // }

    try{
        // console.log("asjkd;")
        const {name , description,category, applications, technical_features, advantages} = req.body;
        var arrImages = [downloadURL];
        


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

const get_single_product = async(req, res)=>{
    const productId = req.params.productId.toString()
    if(!productId){
        res.status(400).send({ success: false, msg: "Wrong Product ID"});
    }
    const product = await Product.find({_id: productId})
    if(!product){
        res.status(400).send({ success: false, msg: "Unable to Fetch Product from Database"});
    }
    res.status(200).send({ success: true, msg: "Product", data: product});
}


export default {
    add_product,
    get_products,
    get_single_product
}