import React from "react";
import data from "./data";
import { Link, useParams } from 'react-router-dom';

function Product(){
    const { id } = useParams(); // Unpacking and retrieve id
    const product = data.products.find((x) => x.id === Number(id));
    if(!product){
        return <div>Product Not Found</div>;
    }

    return(
       <div>
           <div className="row">
               <img src={product.images} alt={product.productName}/>
               <h1>{product.productName}</h1>
               <div>Add to Cart</div>
               <div>
                   <h3>Description</h3>
                   <p>{product.description}</p>
               </div>
               </div>
       </div>
   );
}

export default Product;