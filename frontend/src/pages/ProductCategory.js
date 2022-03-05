import React from 'react'
import {useQuery} from "@apollo/client";
import {GET_COLLECTIONPRODUCT} from  "../gqloperation/queries";
import { Link, useParams } from 'react-router-dom';
import { BACKEND_URL } from '../helpers';

export default function ProductCategory() {
  const{id} = useParams()

  const {loading, error, data} = useQuery(GET_COLLECTIONPRODUCT, {
    variables: {collectionId: id}
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :(</p>

  console.log(data.collection.data.attributes.products.data[0].attributes)
  return (
    <div>
      <h1>{data.collection.data.attributes.post.data.attributes.pageName}</h1>
       <p>{data.collection.data.attributes.post.data.attributes.pages}</p>
      {data.collection.data.attributes.products.data.map(({id, attributes}) => {
         return <div key={id}>
          <Link to={`/product/${id}`}><img src={`${BACKEND_URL + attributes.images.data[0].attributes.url}`} alt={attributes.productName}/>
            <p>{attributes.productName}</p>
            <p>{attributes.details}</p>
            <p>{attributes.description}</p></Link> 
          </div>
      })}
    </div>
  )
}
