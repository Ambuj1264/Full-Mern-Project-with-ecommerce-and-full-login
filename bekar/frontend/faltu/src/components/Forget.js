import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Forget() {
    // const navigate=useNavigate();
    const [state, setState] = useState({
        email: ""  })

    const [emailMessage, setEmailMessage] = useState("")
   
    const handler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitData = async () => {
        const { email } = state
        const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
        //////////email validation//////////////////
        if (email === "") {
            setEmailMessage("Email field is not blank")
            return false
        }
        else if (!emailRegExp.test(email)) {
            setEmailMessage("Email is not valid")
            return false
        }
        else {
            setEmailMessage("")
        }
       
    /////////////login functionality////////////
    console.log(state.email)
    if(state.email)
    {
        try {
          
            let result=await fetch('http://localhost:4500/reset', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            
        });
       
        let data=await result.json();
        console.log(data,"datas")
 
        if(data)
        {
           alert("you reset link is send on your email")
        }
        else{
            alert("Try Again with correct credential")
            // alert("email is not matched")
        }

        } catch (error) {
            console.log(error)
            alert("email is not matched")
        }
        
    }
    else{
        alert("All field is required")
    }
       
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center'>Forget your password</h1>
                    <div className='col-sm-8 col-md-8 mx-auto'>
                        Email:<input
                            type="email"
                            name="email"
                            className='form-control my-3'
                            placeholder="Your Email Id"
                            value={state.email}
                            onChange={handler}

                        />
                        <div style={{ color: "red" }}>{emailMessage}</div>
                       
                        <button
                            className='btn btn-primary'
                            type='button'
                            onClick={submitData}
                        >Send mail</button>
                       <span style={{paddingLeft:"40px"}}>If you have not account please</span> <Link to="/register">Register</Link>
                       <span style={{paddingLeft:"40px"}}></span> <Link to="/login">Go back to login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget