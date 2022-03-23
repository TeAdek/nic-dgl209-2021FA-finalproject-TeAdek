import React from "react";
import { useQuery } from "@apollo/client";
import {
  GET_VALENTINEGIFTS,
  GET_COLLECTIONSELECTION,
  GET_LOCATIONS,
  GET_SLIDESHOWS,
} from "../gqloperation/queries";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../helpers";
import { Slide } from "react-slideshow-image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCart } from "react-use-cart";

function HomePage() {
  const valentineGift = useQuery(GET_VALENTINEGIFTS, {
    variables: { collectionId: 10 },
  });
  const collectionSelection = useQuery(GET_COLLECTIONSELECTION, {
    variables: { pagination: { limit: 6 } },
  });
  const locationList = useQuery(GET_LOCATIONS);
  const slideshowList = useQuery(GET_SLIDESHOWS);
  const { addItem } = useCart();

  const errors =
    valentineGift.error ||
    collectionSelection.error ||
    locationList.error ||
    slideshowList.error;
  const loading =
    valentineGift.loading ||
    collectionSelection.loading ||
    locationList.loading ||
    slideshowList.loading;

  if (loading) return <p>Loading...</p>;
  if (errors) return <p>Error :(</p>;

  console.log(valentineGift);
  console.log(collectionSelection);
  console.log(locationList);
  console.log(slideshowList);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const properties = {
    indicators: true,
  };

  return (
    <div>
      <Slide {...properties}>
        {slideshowList.data.slideshows.data.map(({ id, attributes }) => (
          <div className="each-slide" key={id}>
            <div className="each-fade">
              <div>
                <img
                  class="card-img-top"
                  src={`${
                    BACKEND_URL + attributes.image.data[0].attributes.url
                  }`}
                  alt={attributes.name}
                />
              </div>
              <div className="infoSlideshow">
                {" "}
                <p>{attributes.title}</p>
                <p>{attributes.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>

      <div className="page-screen">
        <h2 className="title-headings featured">Featured Products</h2>
        <Carousel responsive={responsive} autoPlay={false}>
          {valentineGift.data.collection.data.attributes.products.data.map(
            ({ id, attributes }) => (
              <div className="card card-space" key={id}>
                <div className="image-box">
                  <Link to={`/product/${id}`}>
                    <img
                      class="card-img-top card-images"
                      src={`${
                        BACKEND_URL + attributes.images.data[0].attributes.url
                      }`}
                      alt={attributes.name}
                    />
                  </Link>
                </div>

                <div class="card-body">
                  <Link to={`/product/${id}`}>
                    <p class="card-title">{attributes.productName}</p>
                  </Link>
                  <p className="card-subtitle card-subtitle-height mb-2 text-muted">
                    {attributes.description}
                  </p>
                  <div className="price">${attributes.price}</div>
                  <div>
                        <button
                        type="button" 
                        className="btn btn-success add-to-cart"
                          
                          onClick={() => {
                            addItem({
                              id: id,
                              name: attributes.productName,
                              price: attributes.price,
                              img:
                                BACKEND_URL +
                                attributes.images.data[0].attributes.url,
                            });
                          }}>
                          Add to Cart
                        </button>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>
        <h2 className="title-headings">Shop Our Collections</h2>
        <ul className="collections-row">
          {collectionSelection.data.collections.data.map(
            ({ id, attributes }) => (
              <li key={id}>
                <div>
                  <Link to={`/productCategory/${id}`}>
                    <img
                      src={`${
                        BACKEND_URL +
                        attributes.categoryImages.data[0].attributes.url
                      }`}
                      alt={attributes.categoryName}
                      className="collection-images"
                    />
                    <h3 className="text">{attributes.categoryName}</h3>
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
        <div className="view-more-center">
          <Link to="/shop-page">
            <button type="button" 
                        className="btn btn-success view-more">View All</button>
          </Link>
        </div>
        <h2 className="title-headings">Store Locations</h2>
        <ul className="location-row">
          {locationList.data.locations.data.map(({ id, attributes }) => (
            <li key={id} className="location-box">
              <div className="card" style={{ width: 100 + "%" }}>
                <Link to={`/store-location/${id}`}>
                  <img
                    src={`${
                      BACKEND_URL +
                      attributes.locationImage.data[1].attributes.url
                    }`}
                    alt={attributes.locationName}
                    class="card-img card-img-height"
                  />
                  <div class="card-img-overlay">
                    <h3 class="card-title">{attributes.locationName}</h3>
                    <p class="card-text">{attributes.address}</p>
                    <p class="card-text">{attributes.openFor}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>{" "}
      </div>
    </div>
  );
}

export default HomePage;
