import React, { useState } from "react";
import { useCart } from "react-use-cart";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

export default function Cart() {
  const [checkout, setCheckout] = useState(false)
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();
  const jwt = localStorage.getItem("jwt");
 const tax = 20;
  if(checkout){
    return(<div>
      <h4>payment page</h4>
      <Checkout />
      <button onClick={()=>setCheckout(false)}>Cancel</button>
    </div>)
  }

  if (isEmpty) return <div className="cart-empty"> <h1>Your cart is empty</h1> <img src="../images/istockphoto-1044916292-170667a.jpeg" alt="girl gesturing don't know"></img></div>;
  if (items) console.log(items);

  return (
    <div className="shopping">
    <div className="shopping-cart">
      <div className="cart-section">
      <h2>Cart</h2>
      {items.map((item) => {
        return (
          <div key={item.id} className="cart-section-info">
              <div >
                <img src={item.img} alt="..." className="cart-section-image"/>
              </div>
              
              <div className="cart-section-text">
                  <h5>{item.productName}</h5>
                  <p>
                    {item.quantity} x {item.price} = ${item.itemTotal}
                  </p>
                  <div className="quantity-increase-decrease">
                  <button
                  type="button" class="btn btn-primary"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p className="quantity-no">{item.quantity}</p>
                  <button type="button" class="btn btn-primary"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                  </div>
                  
                  </div>
                  <div>
                    {/* <FontAwesomeIcon
                    onClick={() => removeItem(item.id)}
                    icon={faCircleMinus}
                    color="red"
                  /> */}
                  <div className="cancel-cart" onClick={() => removeItem(item.id)}>x</div>
                  </div>
                </div>
                
        );
      })}
      <div className="subtotal">
        <h4>SUB-TOTAL</h4>
        <h4>${cartTotal}</h4>
        </div>
      
      </div>
      <div className="total-section">
        <h3>Total Price</h3>
        <div className="total-section-paragraph"><p>Sub-total</p>
        <p>${cartTotal}</p></div>
        <div className="total-section-paragraph"><p>Tax</p>
        <p>${tax}</p></div>
        <div className="total-section-totalsection"><p>Total</p>
        <p className="total-section-total">${Number(cartTotal) + Number(tax)}</p></div>
        
        {jwt ? <button type="button" class="btn btn-primary checkout" onClick={()=>setCheckout(true)}>Checkout</button> : <div>Please <Link to="/login" class="nav-link"> login </Link> to checkout</div>}
      </div>
    </div>
    </div>
  );
}
