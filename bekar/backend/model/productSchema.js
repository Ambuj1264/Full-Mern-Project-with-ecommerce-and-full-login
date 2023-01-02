const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
        name:String,
        brand:String,
        fakeprice:Number,
        realprice:Number,
        image:{
                type:String,
                required:true
            },
        description:String,
        rating:String,
        category:String


})
const ProductModel=mongoose.model("ProductModel",productSchema)
module.exports=ProductModel;
