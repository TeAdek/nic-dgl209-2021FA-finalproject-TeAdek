import React from 'react'
import {useQuery} from "@apollo/client";
import { GET_PAGEINTRODUCTIONS} from "../gqloperation/queries";

export const OurStory = () => {
  const {loading, error, data} = useQuery(GET_PAGEINTRODUCTIONS, {variables:{
    postId: 2
}})

if(loading) return <p>Loading...</p>
if(error) return <p>Error :(</p>

  const {pageImage, pageName, pages} = data.post.data.attributes

console.log(data)

  return (
    <div><h1>{pageName}</h1>
    <p>{pages}</p></div>
  )
}
