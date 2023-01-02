const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/myDatabase",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log("Could not connect to MongoDB",err))
