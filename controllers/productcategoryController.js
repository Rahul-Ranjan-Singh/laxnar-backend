import Category from '../models/productCategoryModel.js';

const add_category = async (req, res)=>{
    try{
        console.log("cate", req.body.category_name)

        let category = {
            category_name: req.body.category_name
        }

        const category_data = await Category.create(category);
        res.status(200).send({success: true, msg: "Category Details", data: category_data});
    }
    catch(err){
        res.status(400).send({ success: false, msg: err.message});
    }
}

// get-products method
const get_category = async(req, res)=>{
    try {
        var send_data = [];
        var get_all_category = await Category.find();
        if(get_all_category.length > 0){

            res.status(200).send({ success: true, msg: "Category", data: get_all_category});
        }
        else{
            res.status(200).send({ success: false, msg: "No Category are Available", data: send_data});
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message});
    }
}

export default {
    add_category,
    get_category
}