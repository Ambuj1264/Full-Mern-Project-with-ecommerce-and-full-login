import React from 'react'
import {Outlet,Navigate} from "react-router-dom";
const Protected = () => {
 const  authKey=localStorage.getItem("token")
 console.log(authKey)
  return authKey? <Outlet/>:<Navigate to="/login"/>
}

export default Protected;