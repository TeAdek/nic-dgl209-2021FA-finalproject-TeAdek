import React from 'react'
import {useQuery} from "@apollo/client";
import { GET_LOCATIONS, GET_PAGEINTRODUCTIONS } from "../gqloperation/queries";
import LocationCard from '../components/LocationCard';

export const StoreLocation = () => {
  const locationdata = useQuery(GET_LOCATIONS)

const pageData = useQuery(GET_PAGEINTRODUCTIONS, {variables:{
    postId: 3
}})

  const errors = pageData.error || locationdata.error;
  const loading = pageData.loading || locationdata.loading;

  if(loading) return <p>Loading...</p>
  if(errors) return <p>Error :(</p>

  console.log(pageData)
  console.log(locationdata)
   
  return (
    <div>
      <h1>{pageData.data.post.data.attributes.pageName}</h1>
      <p>{pageData.data.post.data.attributes.pages}</p>
      {locationdata.data.locations.data.map(({id, attributes}, index)=> {
return <LocationCard
key={index}
id={id}
address={attributes.address}
locationImage={attributes.locationImage.data[1].attributes.url}
locationName={attributes.locationName}
 openFor={attributes.openFor}/>
 
    })}</div>
  )
}
