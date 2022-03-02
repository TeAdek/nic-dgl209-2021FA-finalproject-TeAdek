import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCTDETAILS } from '../gqloperation/queries'
import { BACKEND_URL } from "../helpers";

export default function ProductDetailPage() {
    const{id} = useParams()
    const {loading, error, data} = useQuery(GET_PRODUCTDETAILS, {variables:{
        productId:id
    }})

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    console.log(data)
    console.log(id)

    const {countInStock, description, detail, images, price, productName} = data.product.data.attributes

  return (
    <div className="page-screen">
       <div className="product-row">
            <div className="product-images">
              <img src={`${BACKEND_URL + images.data[0].attributes.url}`} alt={productName} />
            </div>
            <div className="product-detail">
              <h1>{productName}</h1>
              <p>{description}</p>
              <p>${price}</p>
              <div>{countInStock>0? (<span>In Stock</span>):(<span>Unavailable</span>)}</div>
          <div>{countInStock>0 && (
               <>
    <button className="add-to-cart-product"> Add to Cart</button></>
              
              )}</div>
          
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{detail}</p>
            </div>
          </div>
        </div>
      );
}


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
