import mongoose from "mongoose";

var enquirySchema = mongoose.Schema({
    productName: {
        type: String,
    },
    category: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
    },
});

const Enquiry = mongoose.model("enquiry", enquirySchema);
export { Enquiry };
