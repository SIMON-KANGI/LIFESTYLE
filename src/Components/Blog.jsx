import React from 'react'
import Navbar from './Navbar'
import BlogItems from './blogItems'
import '../Styles/blog.css'
import Footer from './Footer'
import Cart from './Cart'
import Login from './Login';
function Blog() {
  return (
    <div className='container-fluid' id="Blog">
   <Navbar/>
  <Cart/>
      
    
   <div id='blogging'>
      <BlogItems/>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
