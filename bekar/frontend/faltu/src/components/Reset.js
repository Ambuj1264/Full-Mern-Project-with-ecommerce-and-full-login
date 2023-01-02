import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function Reset() {
    // const navigate=useNavigate();
    const param=useParams();
    console.log(param.token)
    const [state, setState] = useState({
        email: "", password: "",conpassword:""
    })

    const [emailMessage, setEmailMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const [conpasswordMessage, setConPasswordMessage] = useState("")
    const handler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitData = async () => {
        console.log(state)
        const { email, password,conpassword } = state
        const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const passwordRegExp = /^[a-zA-Z]\w{3,14}$/;
        const conpasswordRegExp = /^[a-zA-Z]\w{3,14}$/;
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
         ///////////password Validation//////////////////////
         if (conpassword === "") {
            setConPasswordMessage("Confirm Password field is not blank")
            return false
        }
        else if (!conpasswordRegExp.test(conpassword)) {
            setConPasswordMessage("Confirm Password is not valid");
            return false
        }
        else {
            setConPasswordMessage("");
        }
        ///////////////to store data/////////////////////////
        if (password === conpassword) {
            fetch(`http://localhost:4500/reset/${param.token}`, {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                    .then((json) => console.log(json))
                    .catch((e)=>console.log(e))
            // document.getElementById("result").innerHTML = "Register Success";
            
            setState({
                 email: "", password: "", conpassword: ""
            })
        }
        else {
            document.getElementById("result").innerHTML = "Your Password and Confirm Password is not match"
        }



    
    /////////////login functionality////////////
    // if(email && password)
    // {
    //     try {
    //         let result=await fetch('http://localhost:4500/login', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, password }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     });
    //     let data=await result.json();
    //     console.log(data.result,"data")
    //     if(data.result)
    //     {
    //         localStorage.setItem("email",data.result.email)
    //         localStorage.setItem("token",data.token)
    //         navigate("/product")
    //     }
    //     else{
    //         alert("Try Again with correct credential")
    //         alert("email or password is not matched")
    //     }

    //     } catch (error) {
    //         console.log(error)
    //         alert("email or password is not matched")
    //     }
        
    // }
    // else{
    //     alert("All field is required")
    // }
    //     // setState({email:"",password:""})
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center'>Reset Here</h1>
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
                       New Password:<input
                            type="password"
                            name="password"
                            className='form-control my-3'
                            placeholder="Your Password"
                            value={state.password}
                            onChange={handler}
                        />
                        <div style={{ color: "red" }}>{passwordMessage}</div>
                        Confirm Password:<input
                            type="password"
                            name="conpassword"
                            className='form-control my-3'
                            placeholder="Your Confirm Password"
                            value={state.conpassword}
                            onChange={handler}
                        />
                        <div style={{ color: "red" }}>{conpasswordMessage}</div>
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

export default Reset