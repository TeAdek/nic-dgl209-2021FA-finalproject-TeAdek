import React from "react";
import data from "./data";


function HomePage() {
  return (
    <div >
        <ul className="row">
       { data.products.map((products) => (
         <li key={products.id} className="card-body">
            <div className="image-box"><a href={`/product/${products.id}`}>
             <img src={products.images} alt={products.productName} className="card-images"/>
          <span className="add-to-cart"><p>Add To Cart</p></span> </a></div>
           
          <h3>{products.productName}</h3>
          <p>{products.description}</p>
          <div className="price">${products.price}</div>
          
          </li>
         )

         )
}</ul>
    </div>
 
  );
}

export default HomePage;