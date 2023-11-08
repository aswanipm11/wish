import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Trash } from 'react-feather';
import { clearcart, removeCart } from '../redux/cartSlice';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';


function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlepay=()=>{
    dispatch(clearcart())
    setShow(false)
  }


  const dispatch=useDispatch()
  const cartArray=useSelector(state=>state.cart)
  console.log(cartArray);

  if(cartArray.length!=0){
    var total=cartArray.map(i=>i.price).reduce((a,b)=>a+b)
  }
  else{
var total = 0
  }
  return (
    <div className='w-75 container'>
      <h1 className='text-center p-s' style={{color:'#a83281'}}>cart</h1>
{
  cartArray.length>0?(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>product title</th>
          <th>price</th>
          <th>image</th>
          <th>remove</th>
        </tr>
      </thead>
      
      <tbody>
        {
          cartArray.map((i,index)=>(
            <tr >
            <td>{index+1}</td>
            <td>{i.title}</td>
            <td>{i.price}</td>
            <td>
              <img style={{height:'100px'}}  src={i.image} alt=''/>
            </td>
<button   onClick={()=>dispatch(removeCart(i.id))} ><Trash></Trash></button>
          </tr>
  
          ))
        }
      </tbody>
    </Table>
  )
  :<h1 style={{color:'#a83281'}}>cart is empty</h1>
}  
<div>
  <h3 className='text-center p-2 '  style={{color:'#a83281'}}> 
    cart total {total} rs</h3></div> 

    <div className='text-center p-2 '>
      
    <Button className='p-4'style={{color:'#a83281'}} variant='' onClick={handleShow} >
      BUY NOW
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className=' mt-2 text-dark'>

<Modal.Title ><h4>payment details</h4></Modal.Title>

          <FloatingLabel
                        controlId="floatingInput"
                        label="name:"
                        className="mb-3 mt-5 text-dark"
          >
            <Form.Control  name="name" type="text"/>

          </FloatingLabel>
          <FloatingLabel
                        controlId="floatingInput"
                        label="contact no:"
                        className="mb-3 mt-5 text-dark"
          >
            <Form.Control  name="name" type="text"/>

          </FloatingLabel>
          <FloatingLabel
                        controlId="floatingInput"
                        label="place:"
                        className="mb-3 mt-5 text-dark"
          >
            <Form.Control  name="name" type="text"/>

          </FloatingLabel>
          <FloatingLabel
                        controlId="floatingInput"
                        label="upi:"
                        className="mb-3 mt-5 text-dark"
          >
            <Form.Control  name="name" type="text"/>

          </FloatingLabel>



        </Modal.Body>
        <Modal.Footer className='bg-dark '>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlepay}>
         pay
          </Button>

        </Modal.Footer>
        </Modal>



    </div>
     </div>

  )
}

export default Cart