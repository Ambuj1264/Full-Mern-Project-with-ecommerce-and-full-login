const mongoose=require("mongoose")
const contactSchema=new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String
})

const contactMaster=mongoose.model("contactMaster",contactSchema)
module.exports=contactMaster;
