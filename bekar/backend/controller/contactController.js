const contactMaster = require("../model/contactSchema");
const nodemailer = require('nodemailer');
const { getMaxListeners } = require("../model/contactSchema");
const pass = "ddujnoindwcrzuhw"


const ContactMaster = {
  contact: async (req, res) => {
    try {
      const { name, email, mobile, message } = req.body;
      const contactData = await contactMaster.create({
        name,
        email,
        mobile,
        message,
      });

      console.log(contactData);
    //   message
    //   const msg = {
    //     from: "pratik1264675@gmail.com",
    //     to: ["contactData.email"],
    //     subject: "Auto Response-Do not reply",
    //     replyTo: contactData.email,
    //     html: `
    //         <h1>thank for contacting us</h1>
    //         <p><span><b>Name : </b></span> ${contactData.name}</p>
    //         <br/>
    //         <p><span><b>Query : </b></sapn> ${contactData.message}
    //         `
    // }
    //    // transport
    //    const data = nodemailer.createTransport({
    //     auth: {
    //         user: 'pratik1264675@gmail.com',
    //         pass: "ijsawgdnwvgknpib"
    //     },
    //     port: 465,
    //     host: 'smtp.gmail.com'
    // })

    //  // sendMail 
    //  data.sendMail(msg, (err) => {
    //     if (!err) {
    //         console.log('email sent')
    //         res.json({ msg: "Thank you for Contacting us. Your query Will be resolved sortly" })
    //     }
    // })


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pratik1264675@gmail.com",
        pass: "ijsawgdnwvgknpib",
      },
    });
    const mailOptions = {
      from: '"pratik1264675@email.com"',
      to: contactData.email,
      subject: "Auto Response-Do not reply",
      html: `
      <h1>thank for contacting us</h1>
      <p><span><b>Name : </b></span> ${contactData.name}</p>
      <br/>
      <p><span><b>Query : </b></sapn> ${contactData.message}
      `
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("There was an error sending the email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(202).json(contactData);
      }
    });         

      
    } catch (error) {
      console.log(error);
      return res.status(408).send("something error happen");
    }
  },
};
module.exports = ContactMaster;
