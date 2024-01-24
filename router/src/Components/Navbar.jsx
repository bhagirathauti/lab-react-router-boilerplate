import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{height:"70px",backgroundColor:"Purple",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px" }}>
        <h1> <Link style={{color:"white",textDecoration:"none"}} to={"/"}>Kalvium</Link> </h1>
        <div>
        <Link to={"/about"} >ABOUT</Link>
        <Link to={"/contact"} >CONTACT</Link>
        </div>
    </div>
  )
}
