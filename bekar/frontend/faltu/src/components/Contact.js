import React, { useState } from "react";
import './Style.css'

function Contact() {
 

  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    
  });
 
  const handler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitData = () => {
   
  
      fetch("http://localhost:4500/contact", {
        method: "POST",
        body: JSON.stringify({ name:state.name, email:state.email, mobile:state.mobile, message:state.message }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(() => console.log("Api Call Error"));
     alert("your Message is send")

      setState({
        name: "",
        email: "",
        mobile: "",
       message:""
      });
    }
 
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center about">Contact Us</h1>
          <div className="col-sm-8 col-md-8 mx-auto">
            Name:
            <input
              type="text"
              name="name"
              className="form-control my-3"
              placeholder="Your Name"
              value={state.name}
              onChange={handler}
            />
        
            Email:
            <input
              type="email"
              name="email"
              className="form-control my-3"
              placeholder="Your Email Id"
              value={state.email}
              onChange={handler}
            />
          
            Mobile:
            <input
              type="number"
              name="mobile"
              className="form-control my-3"
              placeholder="Your Mobile"
              value={state.mobile}
              onChange={handler}
            />
           
            Message:
            <textarea
              className="form-control my-3"
              placeholder="Your Address"
              name="message"
              value={state.message}
              onChange={handler}
            ></textarea>
            <button
              className="btn btn-primary"
              type="button"
              onClick={submitData}
            >
              Contact Us
            </button>
            <h2 id="result"> </h2>
            <p style={{ marginBottom: "90px" }}></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
