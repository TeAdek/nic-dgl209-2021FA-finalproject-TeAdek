import React from 'react'
import { BACKEND_URL } from "../helpers";

const ValentineCard = ({id, name, price, description, image}) => {
  return (
    
          <div className="row text">
          <div className="card-body">
            <div className="image-box">
                <img
                  src={`${BACKEND_URL + image}`}
                  alt={name}
                  className="card-images"
                />
                <span className="add-to-cart">
                  <p>Add To Cart</p>
                </span>
            </div>

            <h3 >{name}</h3>
            <p>{description}</p>
            <div className="price">${price}</div>
          </div>
     
      </div>
    
  )
}

export default ValentineCard