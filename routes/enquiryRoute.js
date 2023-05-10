import express from "express";
const enquiryRoute = express();
import bodyParser from "body-parser";

enquiryRoute.use(bodyParser.json());
enquiryRoute.use(bodyParser.urlencoded({ extended: true }));

import enquiryController from "../controllers/enquiryController.js";

enquiryRoute.post("/sendEnquiry", enquiryController.sendEnquiryEmail);
enquiryRoute.get("/all", enquiryController.getAllEnquiy);

export { enquiryRoute };
