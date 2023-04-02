import mongoose from 'mongoose';

var categorySchema = mongoose.Schema({
    category_name:{
        type: String,
        required: true
    }
});

const productCategoryModel = mongoose.model("Category", categorySchema);
export default productCategoryModel;