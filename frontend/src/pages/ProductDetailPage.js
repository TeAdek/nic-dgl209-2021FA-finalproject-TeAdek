import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { GET_PRODUCTDETAILS } from '../gqloperation/queries'
import { BACKEND_URL } from "../helpers";

export default function ProductDetailPage() {
    const{id} = useParams()
    const {loading, error, data} = useQuery(GET_PRODUCTDETAILS, {variables:{
        productId:id
    }})
    const {addItem} = useCart()
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    console.log(data)
    console.log(id)

    const {countInStock, description, details, images, price, productName} = data.product.data.attributes

    const addToCart = ()=>{
      addItem({
        id:id,
        productName,
        price,
        img: BACKEND_URL+images.data[0].attributes.url
      })
    }

  return (
    <div className="page-screen">
       <div className="product-row">
            <div className="product-images">
              <img src={`${BACKEND_URL + images.data[0].attributes.url}`} alt={productName} />
            </div>
            <div className="product-detail">
              <h1>{productName}</h1>
              <p>{description}</p>
              <p>${price}</p>
              <div>{countInStock>0? (<span>In Stock</span>):(<span>Unavailable</span>)}</div>
          <div>{countInStock>0 && (
               <>
    <button className="btn btn-success" onClick={addToCart}> Add to Cart</button></>
              
              )}</div>
          
           
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      A deluxe box of truffles curated by you. Be the navigator of your own journey to the stars. Each box will take you on an edible story, layers upon layers of flavours unfolding as you eat through this assorted collection. Each person's story will be slightly different depending on which order and path you choose. You can check out our current collection here. * Please note this box requires 4-5 days more lead time. The truffle collection will be created especially for you. Porch drop and pick up dates may need to be rescheduled. If you need a box of truffles the same day or the next day please visit our King St. or Distillery store it's easy to order directly from the take-out window and get your box immediately.
      </div>
    </div>
  </div>
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Ingredients
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
          </div>
        </div>
      );
}

