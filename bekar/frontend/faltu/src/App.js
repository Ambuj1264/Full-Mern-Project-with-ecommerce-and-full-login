import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Product from "./components/Product"
import Protected from "./components/Protected"
import Login from './components/Login'
import Register from './components/Register'
import  Footer from "./components/Footer"
import Cart from './components/Cart'
import Payment from './components/Payment'
import Forget from './components/Forget'
import Reset from './components/Reset'
const App = () => {
  return (
    <>
    <Navbar />


<Routes>
<Route element={<Protected/>}>
<Route path="/product" element={<Product></Product>} />
<Route path="/cart" element={<Cart></Cart>} />
<Route path="/payment" element={<Payment></Payment>} />

</Route>
<Route path="/reset" element={<Forget></Forget>} />
<Route path="/reset/:token" element={<Reset/>} />
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="*" element={<Home/>} />

</Routes>
<Footer />
      
    </>
  )
}

export default App