import React from "react";
import {useQuery} from "@apollo/client";
import {GET_VALENTINEGIFTS, GET_COLLECTIONLIST, GET_LOCATIONS} from "../gqloperation/queries";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../helpers";

function HomePage() {
  const valentineGift = useQuery(GET_VALENTINEGIFTS, {
    variables: {collectionId: 10}
  })
  const collectionList = useQuery(GET_COLLECTIONLIST)
  const locationList = useQuery(GET_LOCATIONS)

  const errors = valentineGift.error || collectionList.error || locationList.error;
  const loading = valentineGift.loading || collectionList.loading || locationList.loading;

  if(loading) return <p>Loading...</p>
  if(errors) return <p>Error :(</p>

  console.log(valentineGift)
  console.log(collectionList)
console.log(locationList)

  return (
    <div className="page-screen">
       <ul className='product'>
       {valentineGift.data.collection.data.attributes.products.data.map(({id, attributes}) => (
          <li key={id}>
            <div className="image-box card">
              <Link to={`/product/${id}`}>
              <img
              class="card-img-top"
                  src={`${BACKEND_URL + attributes.images.data[0].attributes.url}`}
                  alt={attributes.name}
                />
                <span className="add-to-cart">
                  <p>Add To Cart</p>
                </span>
              </Link>
              <div class="card-body"><h3 class="card-title">{attributes.name}</h3>
            <p className="card-subtitle mb-2 text-muted">{attributes.description}</p>
            <div className="price">${attributes.price}</div></div>
              
            </div>

            
          </li>
        ))}
      </ul>
      <h2 className="title-headings">Shop Our Collections</h2>
      <ul className="collections-row">
        {collectionList.data.collections.data.map(({id, attributes}) => (
          <li key={id}>
            <div>
              <Link to={`/productCategory/${id}`}>
                <img
                  src={`${BACKEND_URL + attributes.categoryImages.data[0].attributes.url}`}
                  alt={attributes.categoryName}
                  className="collection-images"
                />
                <h3 className="text">{attributes.categoryName}</h3>
              </Link>
            </div>
          </li>
        ))}
      </ul>
            
       <h2 className="title-headings">Store Locations</h2>
       <ul className="location-row">
       {locationList.data.locations.data.map(({id, attributes}) => (
           <li key={id} className="location-box">
               <div className="image-box">
                 <Link to={`/store-location/${id}`}>
                 <img
                   src={`${BACKEND_URL + attributes.locationImage.data[1].attributes.url}`}
                   alt={attributes.locationName}
                      className="location-images"
                 />
                 <h3 className="text headings">{attributes.locationName}</h3>
                 <p>{attributes.address}</p>
                <p>{attributes.openFor}</p>
               </Link></div>
           </li>
      )) }
      </ul> 
    </div>
      

  
  );
}

export default HomePage;
