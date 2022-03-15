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
    <button className="btn btn-primary" onClick={addToCart}> Add to Cart</button></>
              
              )}</div>
          
            </div>

            <div class="card product-description">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a className="nav-link active" href="#">Description</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <p class="card-text" id="#">{details}</p>
  </div>
</div>
          </div>
        </div>
      );
}

