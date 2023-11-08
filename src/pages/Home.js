import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Heart, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistslice';
import { fetchProducts } from '../redux/productSlice';

function Home() {
  const dispatch = useDispatch()


const{  allProducts,loading,error}=useSelector((state)=>state.productSlice)

  useEffect(() => {
dispatch(fetchProducts())
  },[])



  return (
    <Container>
    <div>
      <Row>
        <Col className='ms-1' >
          <img src="https://i.postimg.cc/nzHCHkQN/Whats-App-Image-2023-11-01-at-1-13-06-PM.jpg"
          height="500px"
            width="400px" alt='' />

        </Col>


        <Col   >
          <h1 className='mt-5' style={{ color: '#a83281' }}>E-CART</h1>
          <p className='mb-5 ml-2'> If you would like to experience the best of online shopping for men, women and
            at the right place. E-CARTis the ultimate destination for fashion and lifestyle, being host to a wide
            array of merchandise including clothing, footwear, accessories, jewellery, personal care products and
            It is time to redefine your style statement with our treasure-trove of trendy items. Our online storee
            latest in designer products straight out of fashion houses. You can shop online at Myntra from the com
            and get your favourites delivered right to your doorstep.</p>
        </Col>

      </Row>


      <Row>
        {
          loading &&
          <div>
              <i class="fa-solid fa-spinner fa-spin fa-5x"></i>
            </div>
        }
        

        {
          allProducts.length > 0 && allProducts.map(i => (

            <Col lg={3} md={4} sm={6} className='p-5'>



              <Card className='text-center p-2 ' style={{ width: '18rem' }}>
                <Card.Img variant="top"
                  style={{ height: '250px', width: '200px' }} src={i.image} />
                <Card.Body>
                  <Card.Title className='text-center' style={{ color: '#a83281' }}>
                    <h5>
                      {i.title.length > 30 ? i.title.slice(0, 30) + '..' : i.title}
                    </h5>
                  </Card.Title>

                  <Card.Text className='text-center'>

                    <Button onClick={() => dispatch(addToCart(i))} variant=""><ShoppingCart></ShoppingCart>   </Button>
                    <Button onClick={() => dispatch(addToWishlist(i))} variant=""> <Heart className='text-danger'></Heart></Button>


                    <h5>{i.price}: RS</h5>
                    <h5>rating: {i.rating.rate}</h5>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          )) 
            
        }
      </Row>
    </div>
    </Container>
  )
}

export default Home