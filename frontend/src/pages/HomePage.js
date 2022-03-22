import React from "react";
import {useQuery} from "@apollo/client";
import {GET_VALENTINEGIFTS, GET_COLLECTIONLIST, GET_LOCATIONS, GET_SLIDESHOWS} from "../gqloperation/queries";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../helpers";
import ImageGallery from 'react-image-gallery';
import { Slide } from 'react-slideshow-image';


function HomePage() {
  const valentineGift = useQuery(GET_VALENTINEGIFTS, {
    variables: {collectionId: 10}
  })
  const collectionList = useQuery(GET_COLLECTIONLIST)
  const locationList = useQuery(GET_LOCATIONS)
  const slideshowList = useQuery(GET_SLIDESHOWS)

  const errors = valentineGift.error || collectionList.error || locationList.error || slideshowList.error;
  const loading = valentineGift.loading || collectionList.loading || locationList.loading || slideshowList.loading;

  if(loading) return <p>Loading...</p>
  if(errors) return <p>Error :(</p>

  console.log(valentineGift)
  console.log(collectionList)
console.log(locationList)
console.log(slideshowList)

  return (
    <div>
     
      <Slide>
           {slideshowList.data.slideshows.data.map(({id, attributes}) => (
          <div className="each-slide" key={id}>
            <div className="each-fade">
            <div> <img
              class="card-img-top"
                  src={`${BACKEND_URL + attributes.image.data[0].attributes.url}`}
                  alt={attributes.name}
                /></div>
              
                <span>Slide 1</span></div>
              
          </div>
        ))}
      </Slide>
     
      
      <div className="page-screen"> <h2 className="title-headings">Featured Products</h2>
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
               <div className="card" style={{width: 100 + '%'}}>
                 <Link to={`/store-location/${id}`}>
                 <img
                 
                   src={`${BACKEND_URL + attributes.locationImage.data[1].attributes.url}`}
                   alt={attributes.locationName}
                   class="card-img"
                 />
                  <div class="card-img-overlay">
                    <h3 class="card-title">{attributes.locationName}</h3>
                 <p class="card-text">{attributes.address}</p>
                <p class="card-text">{attributes.openFor}</p>
                </div>
                 
               </Link></div>
           </li>
      )) }
      </ul> </div>
      
    </div>
      

  
  );
}

export default HomePage;
