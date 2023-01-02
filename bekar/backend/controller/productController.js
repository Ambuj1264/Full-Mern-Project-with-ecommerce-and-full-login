const ProductModel = require("../model/productSchema");
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dzepo3ahj', 
  api_key: '361849511236691', 
  api_secret: 'mltoKlZetZWH5NiokGqLbYkkjtw' 
});
const productMaster = {
  product: async (req,res) => {
   
    try {
      const file=req.files.image;
      console.log(file)
      const result=await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        if(err){
          console.log(err)
          }
          console.log(result)
          }
            
          );
      console.log(result);
    
    
      const allClothes =  new ProductModel({
        name:req.body.name,
        brand:req.body.brand,
        fakeprice:req.body.fakeprice,
        realprice:req.body.realprice,
        image:result.url,
        description:req.body.description,
        rating:req.body.rating,
        category:req.body.category
      });
      const savedClothes = await allClothes.save();
      console.log(allClothes);
      res.status(202).json(savedClothes);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
    },
    
    
    
  productAll:async(req,res,next)=>{
    try {
        const fulldata=await ProductModel.find();
        console.log(fulldata)
        res.status(202).json(fulldata)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }
   
    
  }
};
module.exports=productMaster;


