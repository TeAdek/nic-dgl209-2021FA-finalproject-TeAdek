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
  console.log(data.collection)
  return (
    <div>

       <div class="jumbotron jumbotron-fluid">
        <div
          style={{
            backgroundImage: `url(${
              BACKEND_URL + data.collection.data.attributes.categoryImages.data[0].attributes.url
            })`, backgroundRepeat: 'no-repeat',
          }}
          class="container d-flex justify-content-end align-items-end"
        >
          <div className='category-detail d-flex flex-column'>
            <h1>{data.collection.data.attributes.post.data.attributes.pageName}</h1>
       <p>{data.collection.data.attributes.post.data.attributes.pages}</p></div>
          
        </div>
      </div>
      
<div className='product'>
      {data.collection.data.attributes.products.data.map(({id, attributes}) => {
         return <div className='card' style={{width: 100 + '%'}} key={id}>
          <Link to={`/product/${id}`}>
            <img class="card-img-top" src={`${BACKEND_URL + attributes.images.data[0].attributes.url}`} 
            alt={attributes.productName}/>
            <div class="card-body">
              <p className="card-title">{attributes.productName}</p>
            <p className="card-subtitle mb-2 text-muted" >{attributes.description}</p>
            <p>${attributes.price}</p>
            </div>
            
            </Link> 
          </div>
      })}</div>
    </div>
  )
}
