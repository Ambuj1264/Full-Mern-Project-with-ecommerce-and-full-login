const User = require("../model/registerSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const mongoose=require("mongoose")

const Registration = {
  register: async(req,res)=> {
    try {
        const { name, email, password, mobile, address} = req.body;
        if (!(name && email && password && mobile)) {
          return res.status(401).send("all inputs are required");
        }
        const userEmail=await User.findOne({email});
                if(userEmail){
                   return res.send({"message":"ALready Registered with this email in Our Database"})
                }
    
        const hasedPassword =await bcrypt.hash(password, 10);
        const verifyPass=await bcrypt.compare(password,hasedPassword)
        console.log(hasedPassword)
    
        const createUser = await User.create({
          name,
          email: email.toLowerCase(),
          password: hasedPassword,
          mobile,
          address
        });
        console.log(createUser)
         //   message
      
       

     const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pratik1264675@gmail.com",
        pass: "ijsawgdnwvgknpib",
      },
    });
    const mailOptions = {
      from: '"pratik1264675@email.com"',
      to: createUser.email,
      subject: "Registration",
      html: `
          <h1>thank for Registrasion us</h1>
          <p><span><b>Name : </b></span> ${createUser.name}</p>
          <br/>
          <p><span><b>your address : </b></sapn> ${createUser.address}
          <br/>
          <p><span><b>your email : </b></sapn> ${createUser.email}
          <br/>
          <p><span><b>your password : </b></sapn> ${createUser.password}
          </br>
          <p><span><b>your mobile no. : </b></sapn> ${createUser.mobile}
          `
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("There was an error sending the email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(202).json({"msg":"successfull",data:createUser})
      }
    });         
   

    
    } catch (error) {
        return res.status(403).json({"msg":"failed","errorMessage":error.message})
    }
   
  },
};
module.exports = Registration;
