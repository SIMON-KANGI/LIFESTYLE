import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Box,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import '../Styles/shopping.css'
import Navbar from './Navbar'
import { useCart } from 'react-use-cart'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

{/*function More(props){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Sizes=['full']
  return(
    <>
    <Navbar/>
    <button onClick={onOpen}  id='more'>{props.details}</button>
    <Modal isOpen={isOpen} onClose={onClose} size={Sizes} id="modalbody" isCentered>
   <ModalOverlay/>
   <ModalContent id="modalbody">
   <ModalCloseButton/>
    <ModalBody >
   <img id="modalimg" src={props.images} width="70%" height="60%" alt=""/>
  <h4>{props.names}</h4>
<h5>{props.prices}</h5>



   </ModalBody>
  
   </ModalContent>
   
   
   </Modal>
    
    </>
  )
}*/}



function Shopping(props) {
  const {addItem} = useCart()
  console.log(typeof addItem);
  const [count, setCount]= useState(0)
  console.log(addItem)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')
  const Sizes=['xl']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
    
    
  }
  const handleIncrement=()=>{
    setCount(count + 1)
    console.log(count)
    addItem(props.item)
    }
  

  
  return (
    <div id="items">
  <Card id="card"> 
  <Box id="box2">
    <>  
      <img id="item-img" src={props.image} alt=""/>
    
      <div className='overlay'>
    
      <button onClick={() => handleSizeClick('xl')} className='text'>Quick Review</button>

        </div>
        <button id="more" onClick={props.more}>{props.details}</button>
      
    </>

    <h5>{props.name}</h5>
    <h6>{props.price}</h6>
    </Box>
    </Card>
   <Modal isOpen={isOpen} onClose={onClose} size={Sizes} id="modalbody" isCentered>
   <ModalOverlay/>
   <ModalContent id="modalbody">
   <ModalCloseButton/>
    <ModalBody >
   <img id="modalimg" src={props.image} width="90%" height="50%" alt=""/>
  <h4>{props.name}</h4>
<h5>{props.price}</h5>
<Button id="add" onClick={handleIncrement}>Add to Cart</Button>
<div>{count}</div>

   </ModalBody>
  
   </ModalContent>
   
   
   </Modal>
    


  
    </div>
  )
}

export default Shopping
