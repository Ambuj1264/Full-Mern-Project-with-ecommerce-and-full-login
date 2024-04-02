import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
function Login() {
    const navigate=useNavigate();
    const [state, setState] = useState({
        email: "", password: ""
    })

    const [emailMessage, setEmailMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const handler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitData = async () => {
        const { email, password } = state
       var nameExp = /^[a-zA-Z\s]+$/;
        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegExp = /^.{4,}$/;
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
        ///////////password Validation//////////////////////
        if (password === "") {
            setPasswordMessage("Password field is not blank")
            return false
        }
        else if (!passwordRegExp.test(password)) {
            setPasswordMessage("Your password sholud be first latter or 4 to 15 charecter only")
            return false
        }
        else {
            setPasswordMessage("")
        }
    /////////////login functionality////////////
    if(email && password)
    {
        try {
            let result=await fetch('http://localhost:4500/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let data=await result.json();
        console.log(data.result,"data")
        if(data.result)
        {
            localStorage.setItem("email",data.result.email)
            localStorage.setItem("token",data.token)
            navigate("/product")
        }
        else{
            alert("Try Again with correct credential")
            alert("email or password is not matched")
        }

        } catch (error) {
            console.log(error)
            alert("email or password is not matched")
        }
        
    }
    else{
        alert("All field is required")
    }
        // setState({email:"",password:""})
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center'>Login Here</h1>
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
                        Password:<input
                            type="password"
                            name="password"
                            className='form-control my-3'
                            placeholder="Your Password"
                            value={state.password}
                            onChange={handler}
                        />
                        <div style={{ color: "red" }}>{passwordMessage}</div>
                        <button
                            className='btn btn-primary'
                            type='button'
                            onClick={submitData}
                        >Login</button>
                       <span style={{paddingLeft:"40px"}}>If you have not account please</span> <Link to="/register">Register</Link>
                       <span style={{paddingLeft:"40px"}}></span> <Link to="/reset">Forget your password</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
