import express from "express";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import config from "../config/firebase_config.js";
import product_controller from "../controllers/productController.js";

const product_route = express();
// const router = express.Router;
import bodyParser from "body-parser";
product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({ extended: true }));

import multer from "multer";
// import path from 'path';

// product_route.use(express.static('public'));

initializeApp(config.firebaseConfig);

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, path.join(__dirname, '../public/productImages'), function(err, sucss){
//             if(err){
//                 throw err;
//             }
//         })
//     },
//     filename: function(req, file, cb){
//         const name = Date.now()+'-'+file.originalname;
//         cb(null, name, function(err, suc){
//             if(err){
//                 throw err;
//             }
//         });
//     }
// });
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

// const upload = multer({storage: storage});

product_route.post("/add-product", upload.single("image"), async (req, res) => {
    try {
        const dateTime = giveCurrentDateTime();

        const storageRef = ref(storage, `files/${req.file.originalname.replace(".", "-") + dateTime}`);

        // Create file metadata including the content type
        const metadata = {
            contentType: req.file.mimetype,
        };

        // Upload the file in the bucket storage
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        const downloadURL = await getDownloadURL(snapshot.ref);

        product_controller.add_product(downloadURL, res, req);
        console.log("File successfully uploaded.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

product_route.get("/get-products", product_controller.get_products);

product_route.get("/get-product/:productId", product_controller.get_single_product);

product_route.delete("/delete-product", product_controller.delete_product);

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
};

export { product_route };
