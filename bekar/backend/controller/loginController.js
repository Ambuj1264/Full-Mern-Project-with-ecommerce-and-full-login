const User = require("../model/registerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const loginMaster = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email, password)) {
        return res.status(404).send("all input required");
      }

      const userEmail = await User.findOne({ email });
      console.log(userEmail, "user");
      if (!userEmail) {
        return res.status(404).send("you are not registered ");
      }
      console.log("pre");
      const verifyPass = await bcrypt.compare(password, userEmail.password);
      console.log(verifyPass);
      if (!verifyPass) {
        return res.status(406).send("you password is wrong");
      }
      const token = jwt.sign({ userEmail }, "ambuj1264", { expiresIn: "24h" });
      res
        .status(202)
        .json({ message: "Login Success", result: userEmail, token: token });
    } catch (error) {
      console.log(error);
      res.status(402).json({ error: error.message });
    }
  },
  welcome: async (req, res, next) => {
    next();
    res.status(200).send("Welcome 🙌 ");
  },
  reset: async (req, res) => {
    // Generate a password reset token
    // console.log("hello");
    const userEmail = await User.findOne({ email: req.body.email });
    console.log(userEmail, "user");
    if (!userEmail) {
      return res.status(404).send("you are not registered ");
    }
    const token = jwt.sign({ email: req.body.email }, "ambuj1264", {
      expiresIn: "23h",
    });

    // Send email with password reset link
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pratik1264675@gmail.com",
        pass: "ijsawgdnwvgknpib",
      },
    });
    const mailOptions = {
      from: '"pratik1264675@email.com"',
      to: userEmail.email,
      subject: "Password Reset",
      text: `Please follow this link to reset your password: http://localhost:3000/reset/${token}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("There was an error sending the email");
      } else {
        console.log("Email sent: " + info.response);
        res
          .status(202)
          .json("Please check your email for a password reset link");
      }
    });
  },
  resetandverify: async (req, res) => {
    // Verify the password reset token
    const token = req.params.token;
    console.log(token, "token");
    const password = req.body.password;
    const hasedPassword = await bcrypt.hash(password, 10);
    console.log(hasedPassword);
    const verifyPass = await bcrypt.compare(password, hasedPassword);
    console.log(verifyPass);
    jwt.verify(token, "ambuj1264", (err, decoded) => {
      if (err) {
        return res.send("Invalid or expired token");
      }
      User.findOneAndUpdate(
        { email: decoded.email },
        { password: hasedPassword },
        (err, user) => {
          if (err) {
            res.send("There was an error updating the password");
          } else {
            console.log();
            res.send("Password updated successfully");
          }
        }
      );
      console.log(decoded.email);
    });
    // const updateData= await User.findOne({email:decoded.email})
  },
};
module.exports = loginMaster;
