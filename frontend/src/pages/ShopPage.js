import React from 'react'
import {useQuery} from "@apollo/client";
import { GET_PAGEINTRODUCTIONS, GET_COLLECTIONLIST} from "../gqloperation/queries";
import CollectionCard from '../components/CollectionCard';
import { BACKEND_URL } from "../helpers";

export const ShopPage = () => {
  const pageData = useQuery(GET_PAGEINTRODUCTIONS, {variables:{
    postId: 1
}})

const collectionList = useQuery(GET_COLLECTIONLIST)

  const errors = pageData.error || collectionList.error;
  const loading = pageData.loading || collectionList.loading;

  if(loading) return <p>Loading...</p>
  if(errors) return <p>Error :(</p>

  console.log(pageData)
  console.log(collectionList)
   
    const {pageImage, pageName, pages} = pageData.data.post.data.attributes
  
   
  return (
    <div>
<h1>{pageName}</h1>
<p>{pages}</p>
<div>    
   <ul>{collectionList.data.collections.data.map(({id, attributes}, key) => {
        return <CollectionCard
        key={key}
        id={id}
      categoryName={attributes.categoryName}  
       image={attributes.categoryImages.data[0].attributes.url}
        /> 
      })
}</ul>
        </div>
    </div>
  )
}
