const Category = require("../models/productCategoryModel");

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

module.exports = {
    add_category
}