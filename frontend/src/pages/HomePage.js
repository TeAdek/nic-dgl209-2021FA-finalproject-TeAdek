import React from "react";
import {useQuery} from "@apollo/client";
import {GET_VALENTINEGIFTS} from "../gqloperation/queries";
import ValentineCard from "../components/ValentineCard";

function HomePage() {
  const { loading, error, data } = useQuery(GET_VALENTINEGIFTS, {
    variables: {collectionId: 10}
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className="page-screen">
        {data.collection.data.attributes.products.data.map(({id, attributes}) => {
        return <ValentineCard 
        id={id}
        name={attributes.name} 
        price={attributes.price} 
        description={attributes.description} 
        image={attributes.images.data[0].attributes.url}
       /> 
        })
}
       
            
      
      {/* <h2 className="title-headings">Shop Our Collections</h2>
      <ul className="collections-row">
        {data.collection.map((collections) => (
          <li key={collections.id}>
            <div>
              <a href={`/collections/${collections.id}`}>
                <img
                  src={collections.images}
                  alt={collections.categoryName}
                  className="collection-images"
                />
                <h3 className="text headings">{collections.categoryName}</h3>
              </a>
            </div>
          </li>
        ))}
      </ul>
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
