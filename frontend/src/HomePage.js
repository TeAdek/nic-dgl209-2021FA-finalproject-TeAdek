import React from "react";
import data from "./data";


function HomePage() {
  return (
    <div className="row">
       { data.products.map((products) => (
         <div key={products.id} className="card-body">
            <div className="image-box"><a href={`/product/${products.id}`}>
             <img src={products.images} alt={products.productName} className="card-images"/>
           </a></div>
           
          <h3>{products.productName}</h3>
          <p>{products.description}</p>
          <div className="price">${products.price}</div>
          </div>
         )

         )
}
    </div>
 
  );
}

export default HomePage;