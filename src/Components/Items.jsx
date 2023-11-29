import React from 'react'
import '../Styles/shopping.css'
import image1 from '../assets/image 15.jpg'
import image2 from '../assets/image 62.jpg'
import image3 from '../assets/image 12.jpg'
import image4 from '../assets/goku.jpg'
import image5 from '../assets/image 13.png'
import image6 from '../assets/image 63.jpg'
import image7 from '../assets/image 64.jfif'
import image8 from '../assets/image 65.jfif'
import image9 from '../assets/image 11.jpg'
import image10 from '../assets/image 17.jpg'
import Shopping from './Shopping'
import Navbar from './Navbar'
import {Modal,  ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
useDisclosure}from '@chakra-ui/react'
function Items() {
   
const items=[
    {
        img:image1,
        name:"IronMan Program",
        price:"Ksh200",
        id:1,
        details:"week 7",
        id2:1,
      
       

    },
    {
        img:image2,
        name:"Beast mode week 2",
        price:"Ksh200",
        id:2,
        details:"week 2",
        id2:2,
       
    },
    {
        img:image3,
        name:"Feminine Program",
        price:"ksh200",
        id:3,
        details:"week 2",
        id2:3,
     
    },
    {
        img:image4,
        name:"Transformation Program",
        price:"Ksh300",
        id:4,
        details:"Bonus",
        id2:4,
      
    },
    {
        img:image4,
        name:"Transformation Program 12",
        price:"Ksh300",
        id:5,
        details:"week 12",
        id2:5,
        
    },
    {
        img:image4,
        name:"IronMan Program",
        price:"Ksh200.00",
        id:6,
        details:"week 6",
        id2:6,
       
    },
    {
        img:image5,
        name:"Feminine Program",
        price:"Ksh200.00",
        id:7,
        details:"week 1",
        id2:7,
     
    },
    {
        img:image6,
        name:"Beast Mode week 1",
        price:"ksh 200.00",
        details:"week 1",
        id:8,
        id2:8,
     
    },
    {
        img:image2,
        name:"IronMan Program",
        price:"Ksh200.00",
        id:9,
        details:"week 5",
        id2:9,
    
    },
    {
        img:image7,
        name:"Transformation Program",
        price:"Ksh 200.00",
        id:10,
        details:"week 11",
        id2:10,
    
    },
    {
        img:image8,
        name:"Feminine Program Final",
        price:"Ksh 200.00",
        id:11,
        details:"final week",
        id2:11,
      
    },
    {
        img:image6,
        name:"BeastMode  Final",
        price:"Ksh 200.00",
        id:12,
        id2:12,
        details:"final week",
    
    },
    {
        img:image9,
        name:"The Feminine Program week 2",
        price:"Ksh 200.00",
        id:13,
        id2:13,
        details:"week 2",
       
    },
    {
        img:image10,
        name:"Beast Mode week 2",
        price:"Ksh 200.00",
        id:14,
        id2:14,
        details:"week 2",
      
    },
    {
        img:image4,
        name:"Transformation Program 10",
        price:"Ksh 200.00",
        id:14,
        id2:15,
      
    },
    {
        img:image1,
        name:"IronMan Program",
        price:200,
        id:16,
        id2:17,
   
    },
    {
        img:image1,
        name:"IronMan Program",
        price:200,
        id:17,
        id2:18,
     
    },
    {
        img:image1,
        name:"IronMan Program",
        price:200,
        id:18,
        id2:19,
    },
    {
        img:image1,
        name:"IronMan Program",
        price:200,
        id:19,
        id2:20,
      
    },
    {
        img:image1,
        name:"IronMan Program",
        price:200,
        id:20,
        id2:21,
       
    },
    {
        img:image1,
        name:"IronMan Program",
        price:200,
        id:21,
        idtwo:22,
     
    }
]




  return (
    <div className='container-fluid' id="items">
     { 
        items.map((item, id)=>{
        return( 
            <>
          <Shopping
         key={id}
         image={item.img}
         name={item.name}
         price={item.price}
         details={item.details}
         more={()=>{
const { isOpen, onOpen, onClose } = useDisclosure() 
const [size, setSize] = React.useState('md')
  const Sizes=['full']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
    
    
  }
                 return(
                     <>
                     <button onClick={()=>handleSizeClick('full')} id="more">{item.details}</button>
                     <Modal isOpen={isOpen} onClose={onClose} size={Sizes} id="modalbody" isCentered>
                     <ModalOverlay/>
                     <ModalContent id="modalbody">
                     <ModalCloseButton/>
                      <ModalBody >
                      <Navbar/>
                     <img id="modalimg" src={item.img} width="90%" height="50%" alt=""/>
                    <h4>{item.name}</h4>
                  <h5>{item.price}</h5>
                  <Button id="add">Add to Cart</Button>
                  <div>{item.details}</div>
                  
                     </ModalBody>
                    
                     </ModalContent>
                     
                     
                     </Modal>
                     
                     
                     </>
                 
                   
                     
                    
                    
                    
                 )}}
                />
                </>
                )
                })
       
                
            
        
     
    
     
    
            }
  </div>
 )

    }
     
export default Items
