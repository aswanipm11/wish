import React from 'react'
import Table from 'react-bootstrap/Table';
import { ShoppingCart, Trash } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist } from '../redux/wishlistslice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
  const dispatch=useDispatch()

 const wishlistArray= useSelector(state=>state.wishlist)

console.log(wishlistArray);
const handleAddcart=(product)=>{
  //add to cart
  dispatch(addToCart(product))
  //remove from wishlist
  dispatch(removeWishlist(product.id))
}


if(wishlistArray.length>0){
  var total=wishlistArray.map(i=>i.price).reduce((a,b)=>a+b)

}
else{
  var total = 0
    }
  

  return (
    <div className='w-75 container'>
      <h1 className='text-center p-s ' style={{color:'#a83281'}}>  Wishlist</h1>
      {
        wishlistArray.length>0?(
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>product Name</th>
              <th>price</th>
              <th>image</th>
              <th>remove</th>
    
            </tr>
          </thead>
          <tbody>
            {wishlistArray.map((i,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{i.title}</td>
            <td>{i.price}</td>
            <td>
                <img style={{height:'100px'}}  src={i.image} alt=''/>
              </td>
  <td>
  <button  onClick={()=>dispatch( removeWishlist(i.id))}><Trash></Trash></button>
  <button className='ms-2'  onClick={()=>handleAddcart(i)} >  <ShoppingCart></ShoppingCart>
</button>
  </td>  
      </tr>

            ))
}
          </tbody>
        </Table>
    
        )
        :<h1 style={{color:'#a83281'}}>wishlist is empty</h1>
      }
<div>
  <h3 className='text-center p-2 '  style={{color:'#a83281'}}> 
    Wishlist total {total} rs</h3></div>
    </div>
  )
}

export default Wishlist