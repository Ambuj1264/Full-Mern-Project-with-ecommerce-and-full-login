const jwt = require("jsonwebtoken");

const verify= (req, res, next) => {
  const token = req.headers["authorization"];
  // console.log(token)
  if (token) {
    //token=token.split(" ")[1];
    // console.log("middelware called", token);
    const tokenVerify = jwt.verify(token, "ambuj1264", (err, valid) => {
      if (err) {
        console.log(err.message);
        res.staus(407).send({ result: "No token is provided" });
      } else {
        next();
      }
    });
  }
  else{
    res.status(408).send({result:"plz add token with header"});
}

};
module.exports=verify
