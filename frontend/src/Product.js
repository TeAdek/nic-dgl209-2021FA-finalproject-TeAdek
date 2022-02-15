import React from "react";
import data from "./data";
import { Link, useParams } from "react-router-dom";

function Product() {
  const { id } = useParams(); // Unpacking and retrieve id
  const product = data.products.find((x) => x.id === Number(id));
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="page-screen">
      <div className="product-row">
        <div className="product-images">
          <img src={product.images} alt={product.productName} />
        </div>
        <div className="product-detail">
          <h1>{product.productName}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="add-to-cart-product"> <a href="">Add to Cart</a></div>
        </div>

        <div className="product-description">
          <h3>Description</h3>
          <p>{product.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
