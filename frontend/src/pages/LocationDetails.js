import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_LOCATIONDETAILS } from '../gqloperation/queries'
import { BACKEND_URL } from "../helpers";

export default function LocationDetails() {
    const{id} = useParams()
     console.log(id);
     const {loading, error, data} = useQuery(GET_LOCATIONDETAILS, {variables:{
        locationId:id
    }})

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    console.log(data)
   
     const {address, locationDescription, locationImage, locationName, openFor, phoneNumber} = data.location.data.attributes

     return (
         <div className='location'>
             <h1>{locationName}</h1>
             <img
                src={`${BACKEND_URL + locationImage.data[1].attributes.url}`}
                alt={locationName}
              />
             <p>{address}</p>
             <p>{phoneNumber}</p>
             <p>{openFor}</p>
             <img
                src={`${BACKEND_URL + locationImage.data[0].attributes.url}`}
                alt={locationName}
              />
             <p>{locationDescription}</p>
         </div>
     )
     }
