import React from 'react'
import { useCart } from 'react-use-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCircle, faCircleMinus, faCoffee, faMinusCircle, fas } from '@fortawesome/free-solid-svg-icons'
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faUser } from "@fortawesome/free-solid-svg-icons";
  
  library.add(faUser);
export default function Cart() {
  const {isEmpty, items, cartTotal, updateItemQuantity, removeItem} = useCart()
  if(isEmpty) return <h1>Your cart is empty</h1>
  if(items) console.log(items)

  return (
    <div>Cart
      {items.map(item =>{
        return(
          <div class="card mb-3" style={{maxWidth: 540 + 'px'}} key={item.id}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={item.img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.productName}</h5>
        <p>{item.quantity} x {item.price} = ${item.itemTotal}</p>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            
           <FontAwesomeIcon onClick={() => removeItem(item.id)} icon={faCircleMinus} color='red'/>
        <i></i>
      </div>
    </div>
  </div>
</div>
        )
      })}
      <div>
        <h3>Total Price</h3>
        <h3>${cartTotal}</h3>
        
      </div>
      
</div>
    
  )
}

