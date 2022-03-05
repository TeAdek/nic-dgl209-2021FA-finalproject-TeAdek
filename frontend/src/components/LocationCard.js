import React from 'react'
import { BACKEND_URL } from "../helpers";
import {Link} from 'react-router-dom'

const LocationCard = ({id, address, locationImage, locationName, openFor}) => {
    return (
        <Link to={`/store-location/${id}`}>
        <div className="row text">
        <div className="card-body">
          <div className="image-box">
              <img
                src={`${BACKEND_URL + locationImage}`}
                alt={locationName}
                className="card-images"
              />
             
          </div>
          <h3>{locationName}</h3>
          {/* <p>{description}</p>
          <div className="price">${price}</div> */}
        </div>
   
    </div>
    </Link>
  )
}

export default LocationCard