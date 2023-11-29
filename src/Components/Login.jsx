import React from 'react';
import { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs'
import { Formik } from 'formik';
import '../Styles/book.css'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useClipboard, useDisclosure } from '@chakra-ui/react'

import {RiAccountCircleFill} from 'react-icons/ri'
import '../Styles/login.css'

function LogIn(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Update localStorage whenever the count changes
  const [size, setSize] = React.useState('md')
  const Sizes=['sm','xl','full']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
    
    
  }
  return(
    <div className='container'>
    <Link onClick={()=>handleSizeClick('full')} id='books'>Log in</Link>
    <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
    <ModalOverlay>
   
    <ModalContent> 
    <ModalCloseButton onClose={onClose}/>
    <ModalBody>
    <section id="tabs"> 
   
    <h1 className='text-center'>Log in</h1>
 <p className='text-center'>New to this Site?<Link>Sign up</Link></p>
 <Google id="google" className="text-center"/>  
 <Facebook className="text-center" id="facebook"/>
 <p style={{fontSize:"1.2rem"}} className='text-center'>___________________or___________________</p>
 <Email/>
    
    </section>
   
   
    </ModalBody>
    </ModalContent>
    </ModalOverlay>
    </Modal>
    
         
     
     
   </div>
  )
}
function Google(){
  return(
<div className='text-center'>
<Link>

<Button id="google">
<span id="g-icon"><FcGoogle/></span>
Sign up with Google
</Button>
</Link>


</div>

  )
}
function Facebook(){
  return(
    <div className='text-center'>
    <Link>
    <Button id="facebook">
    <span id="f-icon"><BsFacebook/></span>
    Sign up with Facebook
    </Button>
    
    </Link>
    </div>
  )
}
function Email(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Update localStorage whenever the count changes
  const [size, setSize] = React.useState('md')
  const Sizes=['sm','xl','full']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userName, setUserName]=useState()
const [password, setPassword]=useState()
const onSubmit=(e)=>{
  setIsLoggedIn(true)
  return alert(userName, password)
}
  
return(
  <div className='text-center'>

  <button id="email1" onClick={()=>handleSizeClick('full')}>
  Sign up with Email
  </button>
  <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
  <ModalOverlay>
 
  <ModalContent> 
  <ModalCloseButton onClose={onClose}/>
  <ModalBody>

  <section id="tabs"> 
  <h1 className='text-center'>Sign Up</h1>
  <p className='text-center'>
    Already a Member? <Link><LogIn/></Link>
  </p>
  <form onSubmit={onSubmit}>
  <div id="username">
  <label htmlFor='name'>Email*</label>
  <br/>
  <input type='email' value={userName} id="name" onChange={(e)=>setUserName(e.target.value)} required/>
  </div>
  <br/>
  <div id="password">
  <label htmlFor='passwords'>Password*</label>
  <br/>
  <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id="passwords" required/>
  </div>
  <button id="log-in" type="button" onClick={onSubmit}>Log in</button>
  <br/>
   <p className='text-center'>_____________________or_____________________</p>
   <div style={{display:'flex'}}>
   <p id="g-icon"><FcGoogle/></p>
   <p id="f-icon"><BsFacebook/></p>
   </div>
  </form>
 
  
  
  
  </section>

 

  
  {/* Add social login buttons or any other login options here */}
 
 
  </ModalBody>
  </ModalContent>
  </ModalOverlay>
  </Modal>
  </div>
)
}
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Update localStorage whenever the count changes
  const [size, setSize] = React.useState('md')
  const Sizes=['sm','xl','full']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
    
    
  }
    return(
  
      <div className='container'>
      <button id="logiin" onClick={()=>handleSizeClick('full')}><RiAccountCircleFill/>Login</button>
      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
      <ModalOverlay>
     
      <ModalContent> 
      <ModalCloseButton onClose={onClose}/>
      <ModalBody>
      <section id="tabs"> 
     
      <h1 className='text-center'>Sign Up</h1>
   <p className='text-center'>Already a member?<Link>Log in</Link></p>
   <Google id="google" className="text-center"/>  
   <Facebook className="text-center" id="facebook"/>
   <p style={{fontSize:"1.2rem"}} className='text-center'>___________________or___________________</p>
   <Email/>
      
      </section>
     
     
      </ModalBody>
      </ModalContent>
      </ModalOverlay>
      </Modal>
      
           
       
       
     </div>
     
   
    
   );
 
}

export default Login;
