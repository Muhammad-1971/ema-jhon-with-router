import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css';


const OrderReview = () => {
    const [products] = useProducts();
   const [carts, setCarts] = useCart(products);
   const history = useHistory()
   const handlerRemove = key =>{
        const  newCart = carts.filter(product => product.key !== key);
                setCarts(newCart);
                 removeFromDb(key)
   }
   const hanldePlaceOrder = () =>{
    history.push('/placeorder');
    setCarts([]);
    clearTheCart();
   }
    return (
   
           <div className='shop-container'>
                <div className="product-container">
                    {
                       carts.map(cart => <ReviewItem 
                                        key ={cart.key}
                                       product={cart}
                                       handlerRemove ={handlerRemove}
                                       ></ReviewItem>)
                    }
           </div>
           <div className="cart-container">
               <Cart cart={carts}>
                   <button onClick={hanldePlaceOrder} className="btn-regular">Place Order</button>
               </Cart>
           </div>
           </div>
    );
};

export default OrderReview;