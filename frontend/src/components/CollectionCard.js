import React from 'react'
import { Link } from 'react-router-dom';
import { BACKEND_URL } from "../helpers";

const CollectionCard = ({id, categoryName, image}) => {
    return (
    <div>
    <Link to={`/productcategory/${id}`}>
      <div>
          <div>
              <img
                src={`${BACKEND_URL + image}`}
                alt={categoryName}
                className="collection-images"
              />
              <h3 className="text headings">{categoryName}</h3>
          </div>
    </div>
    </Link>
    </div>
  )
}

export default CollectionCard 