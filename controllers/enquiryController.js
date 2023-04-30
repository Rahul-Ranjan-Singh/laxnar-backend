import emailServce from '../utils/email.js'

const sendEnquiryEmail = async (req, res) => {

    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const productName = req.body.productName
    const category = req.body.category
    const name = req.body.name
    const writtenMessage = req.body.writtenMessage
    const senderEmail = req.body.senderEmail

    const verificationStatus = await emailServce.sendEnquiryEmailHelper(
        email,
        phoneNumber,
        productName,
        category,
        name,
        writtenMessage,
        senderEmail
    )

    return res.status(200).json({
        message: verificationStatus,
    })

}

export default {
    sendEnquiryEmail
}