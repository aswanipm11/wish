import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Heart,  ShoppingBag, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { searchProduct } from '../redux/productSlice';




function Header() {
  const wishlistArray= useSelector(state=>state.wishlist)
var wishlistCount=wishlistArray.length

const dispatch=useDispatch()

  const cartArray=useSelector(state=>state.cart)
  var cartCount=cartArray.length

  return (
    <div >
<Navbar expand="lg" className="bg-black">
      <Container>

       <Link to="/" style={{textDecoration:'none'}}>
       <Navbar.Brand className='text-white '  href="#home">

<b style={{color:'#a83281'}}> <ShoppingBag></ShoppingBag> E-CART</b>
</Navbar.Brand>

       </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#link">Link</Nav.Link>
          
        <Form.Control className='ms-2'
         type="text" placeholder="search product" 
         onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
    
          </Nav>
          <Nav className="mr-auto">
            <Link to={'/cart'} style={{textDecoration:'none'}}>
            <Nav.Link className='text-white' href="#home"><ShoppingCart></ShoppingCart>{cartArray.length}</Nav.Link>

            </Link>
            
            <Link to={'/wishlist'} style={{textDecoration:'none'}}>
            <Nav.Link className='text-white' href="#link"  ><Heart   style={{color:'#a83281'}}></Heart>{wishlistCount}</Nav.Link>

            </Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>        
    </div>
  )
}

export default Header