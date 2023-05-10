import emailServce from "../utils/email.js";
import { Enquiry } from "../models/enquiryModel.js";

const sendEnquiryEmail = async (req, res) => {
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const productName = req.body.productName;
    const category = req.body.category;
    const name = req.body.name;
    const writtenMessage = req.body.writtenMessage;
    const senderEmail = req.body.senderEmail;

    const verificationStatus = await emailServce.sendEnquiryEmailHelper(email, phoneNumber, productName, category, name, writtenMessage, senderEmail);

    const EnquiryResult = await Enquiry.create({
        name: name,
        phone: phoneNumber,
        productName: productName,
        category: category,
        message: writtenMessage,
        email: senderEmail,
    });

    return res.status(201).json({
        message: EnquiryResult,
    });
};

const getAllEnquiy = async (req, res) => {
    const EnquiryResult = await Enquiry.find();

    return res.status(201).json({
        EnquiryResult,
    });
};

export default {
    sendEnquiryEmail,
    getAllEnquiy,
};
