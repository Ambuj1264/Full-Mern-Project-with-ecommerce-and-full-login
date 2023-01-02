import React from 'react'
import "./Style.css"
import about from "../asset/img/about.png"
const About = () => {
  return (
    <>
          <div className="myConatainer">
        <div className="about"> <h1>About Us</h1> </div>

        <div className="container-fluid">
  <div className="row">
    <div className="col w-50">
     <img src={about} alt="" />
    </div>
    <div className="col w-50">
          <div className="px-5 py-lg-5">
          <ul className='px-5'>
            <li>
            "We believe that shopping should be a hassle-free and enjoyable experience, which is why we strive to bring you a wide selection of quality products at competitive prices."
            </li><br />
            <li>"Our mission is to make it easy for you to find and buy the products you love, from the comfort of your own home."</li>
            <br />
            <li>"We are passionate about providing our customers with an unparalleled shopping experience, from the moment you land on our website until the moment your order arrives at your door."</li>
            <br />
            <li>"At Ambuj Singh, we are dedicated to offering the best selection of products and the highest level of customer service. We hope you enjoy shopping with us!"</li>
            <br />
            <li>"We know that your time is valuable, which is why we work hard to bring you a seamless and convenient shopping experience. Thank you for choosing Ambuj Singh"</li>
          </ul>

          </div>
    </div>
  </div>
</div>
          </div>

    </>
  )
}

export default About