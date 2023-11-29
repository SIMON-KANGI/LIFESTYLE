import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'
function Footer() {
  return (
    <div id="footer" style={{ marginTop:"3rem"}}>
      <section id="sec-1"><h3 style={{paddingLeft:"2rem;", paddingRight:"2rem;", fontSize:"3rem"}}>Life<span>style</span></h3></section>
      <section id="sec-2"><Link style={{paddingLeft:"2rem;", color:"black", fontSize:"1.2rem"}}>Facebook</Link></section>
      <section id="sec-3" style={{paddingLeft:"2rem;", paddingRight:"2rem;", display:"block"}}>
      <Link style={{color:"black", paddingLeft:"10rem", fontSize:"1.2rem"}}>Twitter</Link>
      <h5>All rights reserved| LIFESTYLE 2023</h5>
      </section>
     
      <section id="sec-4"><h5> lifestyle.co.ke|0797222488</h5></section>
    </div>
  )
}

export default Footer
