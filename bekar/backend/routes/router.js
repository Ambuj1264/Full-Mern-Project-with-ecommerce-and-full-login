const express=require("express");
const loginMaster = require("../controller/loginController");
const router=express.Router();
const Registration=require("../controller/registerController")
const verify=require("../middleware/verify")
const ContactMaster=require("../controller/contactController")
const productMaster=require("../controller/productController");
const { login } = require("../controller/loginController");
const cloudinary = require('cloudinary').v2;




cloudinary.config({ 
         cloud_name: 'dzepo3ahj', 
         fapi_key: '361849511236691', 
          api_secret: 'mltoKlZetZWH5NiokGqLbYkkjtw' 
});



router.post("/userRegister",Registration.register)
router.post("/login", loginMaster.login)
router.post('/reset',loginMaster.reset)
router.post('/reset/:token',loginMaster.resetandverify)
router.post("/contact", ContactMaster.contact)

router.post("/welcome",verify,loginMaster.welcome)
router.get("/productAll",productMaster.productAll)
router.post("/product",verify,productMaster.product)



module.exports=router;
