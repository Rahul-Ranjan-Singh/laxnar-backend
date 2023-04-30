import nodemailer from "nodemailer";

    const sendEnquiryEmailHelper = (
        email,
        phoneNumber,
        productName,
        category,
        name,
        writtenMessage,
        senderEmail
    )  => {
        const content = `
            <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                <div style="margin:50px auto;width:70%;padding:20px 0">
                    <div style="border-bottom:1px solid #eee">
                        <a href="" style="font-size:1.4em;color: #00466A;text-decoration:none;font-weight:600">House Dates</a>
                    </div>
                    <p style="font-size:1.1em">Hi,</p>
                    <p>We have got a new Product Enquiry on Laxnar, details are Mentioned Below</p>
                    <h2 style="background: #00466A;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
                        Product Name : ${productName} <br>
                        Product Name : ${category} <br><br>
                        Name of Person : ${name} <br>
                        Person's Phone NUmber : ${phoneNumber} <br>
                        Person's Email : ${senderEmail} <br><br>

                        Message By Him:

                        ${
                            writtenMessage
                        }

                    </h2>
                    <p style="font-size:0.9em;">Regards,<br />House Dates</p>
                    <hr style="border:none;border-top:1px solid #eee" />
                </div>
            </div>
        `;
        const subject = `New Laxnar Enquiry: by ${name}`;
        return sendMail(content, email, subject);
    };

    const sendMail = async (
        content,
        toEmail,
        subject
    ) => {
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: process.env.NODE_MAILER_CLIENT_ID,
                    pass: process.env.NODE_MAILER_CLIENT_SECRET,
                },
                logger: true,
            });

            await transporter.sendMail({
                from: process.env.NODE_MAILER_CLIENT_ID,
                to: toEmail,
                subject,
                html: content,
                headers: { "x-myheader": "test header" },
            });
            return true;
        } catch (error) {
            console.log(error)
        }
    };

export default {
    sendEnquiryEmailHelper
}

