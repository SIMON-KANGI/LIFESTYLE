import React, { useState, useEffect } from 'react';
import '../Styles/blog.css';
import { FcLike } from 'react-icons/fc';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {PiShareFatThin} from 'react-icons/pi'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
  import Navbar from './Navbar'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Cart from './Cart';
function Blogging(props) {
  // Retrieve the count value from localStorage, or default to 0

  const [count, setCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  // Update localStorage whenever the count changes
  const [size, setSize] = React.useState('md')
  const Sizes=['sm','xl','full']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
    
    
  }
  function handleLike() {
    setCount(count + 1);
  }

  return (
    <div className='container'>
      <div id="blogs">
        <img id="blogImage" onClick={()=>handleSizeClick('full')} src={props.image} alt="" />
        <div id='text'>
        <div className='dropdown dropstart'>
           <button  id="share" type="button"  data-bs-toggle="dropdown"><BsThreeDotsVertical/></button>
        <div  className='dropdown-menu'>
        <Link onClick={()=>handleSizeClick('sm')} id="sharepost"><PiShareFatThin/> Share Post</Link></div>
           </div>
           <Modal onClose={onClose} isOpen={isOpen} size={'sm'} isCentered> 
          
           <ModalOverlay> 
           <ModalCloseButton/>
           
           <ModalContent>
          
           <ModalBody>
           <div>
            <h1>Facebook</h1>
           <h2>Twitter</h2>
           </div>
          
           </ModalBody>
           </ModalContent>
           
           </ModalOverlay>
           
           </Modal>
      <Link onClick={onOpen} id='moreblogs'><h1>{props.name}</h1>
          <p>{props.detail}</p></Link>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <div id="views">{count} views
          <button id="like" type="button" onClick={handleLike}>
            <FcLike /> {count}
          </button></div>
          
        </div>
      </div>
    {/*<Modal isOpen={isOpen} size={'full'}>
      <ModalOverlay>
      <ModalContent>
      <div> <Cart/>
      <Navbar/></div>
      <ModalBody>
      <div className='container'>
      <Tabs>
      <TabList id="blog-categories">
      <Tab>
    <Link to="/Blog">All Posts</Link>
      </Tab>
      <Tab>
      Men's Health
      </Tab>
      <Tab>
      Sexual Health
      </Tab>
      <Tab>
      Masculinity
      </Tab>
      <Tab>
      Fitness
      </Tab>
      </TabList>
      <TabPanels>
      <TabPanel>
      
      </TabPanel>
      <TabPanel>
      <h1>Two</h1>
      </TabPanel>
      
      </TabPanels>
      </Tabs>
      
      </div>  
       
   
      <div id="blog-mod" className='container'>
      <div className='dropdown dropstart'>
      <button id="share" type="button"  data-bs-toggle="dropdown"><BsThreeDotsVertical/></button>
   <div  className='dropdown-menu'>
   <Link id="sharepost"><PiShareFatThin/> Share Post</Link></div>
      </div>
      <h1>{props.name}</h1>
      <img src={props.image} alt=""/>
      <p>{props.detail}</p>
      <div id="subscribe" className='container text-center'>
      <h4 className='text-center'>Want to read more?</h4>
      <p>Subscribe to www.amerix.co.ke to keep reading this exclusive post.</p>
      <br/>
      <Button id="subs">Subscribe</Button>
      </div>
      </div>
      
       </ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>*/}
    </div>
  );
}

export default Blogging;
