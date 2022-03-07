import React from 'react'
import { BACKEND_URL } from "../helpers";
import {Link} from 'react-router-dom'

const LocationCard = ({id, address, locationImage, locationName, openFor}) => {
    return (
        <Link to={`/store-location/${id}`} className='location-card'>
        <div className="card" style={{width: 100 + '%'}}>
        
          <div >
              <img
                src={`${BACKEND_URL + locationImage}`}
                alt={locationName}
                className="card-img-top"
              />
             
          </div>
          <div className="card-body">
          <h3 lass="card-text">{locationName}</h3>
        </div>
   
    </div>
    </Link>
  )
}

export default LocationCard