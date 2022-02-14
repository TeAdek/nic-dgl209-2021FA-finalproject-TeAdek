import React from "react";
import data from "./data";

function HomePage() {
  return (
    <div>
       { data.products.map((products) => (
         <div key={products.id}>
           <a href={`/product/${products.id}`}>
             <img src={products.images} alt={products.productName}/>
           </a>
          <h2>{products.productName}</h2>
          <div>{products.price}</div>
          </div>
         )

         )
}
    </div>
 
  );
}

export default HomePage;