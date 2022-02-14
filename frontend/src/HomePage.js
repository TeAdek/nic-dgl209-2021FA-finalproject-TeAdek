import React from "react";
import data from "./data";

function HomePage() {
  return (
    <div>
      <ul className="row text">
        {data.products.map((products) => (
          <li key={products.id} className="card-body">
            <div className="image-box">
              <a href={`/product/${products.id}`}>
                <img
                  src={products.images}
                  alt={products.productName}
                  className="card-images"
                />
                <span className="add-to-cart">
                  <p>Add To Cart</p>
                </span>
              </a>
            </div>

            <h3 >{products.productName}</h3>
            <p>{products.description}</p>
            <div className="price">${products.price}</div>
          </li>
        ))}
      </ul>
      <h2 className="headings">Shop Our Collections</h2>
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
                <h3 className="text">{collections.categoryName}</h3>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
