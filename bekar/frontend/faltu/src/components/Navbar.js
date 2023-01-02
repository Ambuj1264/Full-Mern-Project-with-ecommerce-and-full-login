import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Style.css"
const Navbar = () => {
  const navigate=useNavigate();
  const authKey=localStorage.getItem("token")
const email=localStorage.getItem("email");


const signout=()=>{
  localStorage.clear();
  navigate("/login")
  console.log("navigate")
}
  // console.log(authKey)
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row" >
          <div className="col-12 mx-auto" style={{"padding":"0"}}>
            <nav className="navbar navbar-expand-lg bg-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  AMBUJ SINGH
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                {
                  authKey? <ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">
                  <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/product">
                        Product
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink className="nav-link active " to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/contact">
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item">
                    
                      <button className="nav-link active" onClick={signout} style={{border:"none"}}>
                        Welcome:{email.substring(0,email.indexOf("@"))} |Logout
                      
                      </button>
                    </li>
                    </ul>:<ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                  
                    <li className="nav-item ">
                      <NavLink className="nav-link active " to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/contact">
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item">

                      <NavLink className="nav-link active" to="/login">
                        Login/Signup
                      </NavLink>
                    </li>
                  </ul>
                }
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
