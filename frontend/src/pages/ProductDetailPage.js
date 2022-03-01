// import React, {useState} from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function Product(props) {
//   const navigate = useNavigate();

//   const { id } = useParams(); // Unpacking and retrieve id
//   const product = data.products.find((x) => x.id === Number(id));

//   const [qty, setQty] = useState(1); 
//   if (!product) {
//     return <div>Product Not Found</div>;
//   }

//    const addToCartHandler = () => {
//        navigate(`/cart/${product.id}?qty=${qty}`);
//    };

//   return (
//     <div className="page-screen">
//       <div className="product-row">
//         <div className="product-images">
//           <img src={product.images} alt={product.productName} />
//         </div>
//         <div className="product-detail">
//           <h1>{product.productName}</h1>
//           <p>{product.description}</p>
//           <p>${product.price}</p>
//           <div>{product.countInStock>0? (<span>In Stock</span>):(<span>Unavailable</span>)}</div>
//           <div>{product.countInStock>0 && (
//               <><div>
//                   <div>Qty</div>
//                   <div>
//                       <select value={qty} onChange={(e) => setQty(e.target.value)}>
//                         {[...Array(product.countInStock).keys()].map(
//                             (x) => (
//                                 <option key={x + 1} value={x + 1}>
//                                     {x + 1}
//                                 </option>
//                             )
//                         )}
//                       </select>
//                   </div>
//               </div>
// <button onClick={addToCartHandler} className="add-to-cart-product"> Add to Cart</button></>
              
//           )}</div>
          
//         </div>

//         <div className="product-description">
//           <h3>Description</h3>
//           <p>{product.detail}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;
