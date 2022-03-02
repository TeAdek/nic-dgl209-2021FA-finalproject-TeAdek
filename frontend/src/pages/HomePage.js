import React from "react";
import {useQuery} from "@apollo/client";
import {GET_VALENTINEGIFTS, GET_COLLECTIONLIST} from "../gqloperation/queries";
import ValentineCard from "../components/ValentineCard";

function HomePage() {
  const valentineGift = useQuery(GET_VALENTINEGIFTS, {
    variables: {collectionId: 10}
  })
  const collectionList = useQuery(GET_COLLECTIONLIST)

  const errors = valentineGift.error || collectionList.error;
  const loading = valentineGift.loading || collectionList.loading;

  if(loading) return <p>Loading...</p>
  if(errors) return <p>Error :(</p>

  console.log(valentineGift)
  console.log(collectionList)

  return (
    <div className="page-screen">
        <ul>{valentineGift.data.collection.data.attributes.products.data.map(({id, attributes}, key) => {
        return <ValentineCard 
        key={key}
        id={id}
        name={attributes.name} 
        price={attributes.price} 
        description={attributes.description} 
        image={attributes.images.data[0].attributes.url}
       /> 
        })
}</ul>
       
{/* <ul>
        {collectionList.data.collection.map(({id, attributes}, key) => (
          return <CollectionCard
          id={id}
          categoryName={attributes.categoryName}
          image={}/>
        ))}
      </ul> */}
   
      
      {/* 
      <h2 className="title-headings">Store Locations</h2>
      <ul className="location-row">
      {data.locations.map((location) => (
          <li key={location.id} className="location-box">
              <div className="image-box"><a href={`/locations/${location.id}`}>
                <img
                  src={location.images}
                  alt={location.locationName}
                     className="location-images"
                />
                <h3 className="text headings">{location.locationName}</h3>
                <p>{location.address}</p>
                <p>{location.openFor}</p>
              </a></div>
          </li>
      )) }
      </ul> */}
    </div>
  );
}

export default HomePage;
