import React from 'react'
import "./Style.css"
import about from "../asset/img/6.webp"
const Payment = () => {
  return (
    <>
          <div className="myConatainer">
        <div className="about"> <h1>Make your payment </h1> </div>

        <div className="container-fluid">
  <div className="row">
    <div className="col w-50">
     <img src={about} alt="" style={{width:"700px", height:"400px"}}/>
    </div>
    <div className="col w-50">
          <div className="px-5 py-lg-5">
          <ul className='px-5'>
            <li>
           Encrypting the payment quote using a secure encryption algorithm, such as SSL or TLS, can help protect the sensitive information contained in the quote from being intercepted or accessed by unauthorized parties.
            </li><br />
            <li> Encrypting the payment quote using a secure encryption algorithm, such as SSL or TLS, can help protect the sensitive information contained in the quote from being intercepted or accessed by unauthorized parties.</li>
            <br />
            <li><h1 style={{fontWeight:"bolder"}}>You can payment on 8953176600@upi</h1> </li>
            <br />

          </ul>

          </div>
    </div>
  </div>
</div>
          </div>

    </>
  )
}

export default Payment