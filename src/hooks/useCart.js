import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products =>{

  const [carts, setCarts] = useState([])
  useEffect(()=>{
    
    if(products.length){
      const savedCart = getStoredCart();
      const storedCart = [];
      for(const key in savedCart){
        const addedProduct = products.find(product => product.key === key);
        if(addedProduct){
          //set quantity
          const quantity = savedCart[key];
          addedProduct.quantity= quantity;
          storedCart.push(addedProduct);

        }
      }
      setCarts(storedCart);
    }

  }, [products]);
  return [carts , setCarts ]
}
export default useCart;