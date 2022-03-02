import React from "react";
import { useQuery} from '@apollo/client'
import {GET_COLLECTIONLIST} from "../gqloperation/queries"
import {Link} from "react-router-dom"

import "font-awesome/css/font-awesome.css";

function NavBar() {
    const {loading, error, data} = useQuery(GET_COLLECTIONLIST)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>
    if(data) console.log(data)

  return (
    <div className="body">
      <nav>
        <ul>
          <li className="logo-nav">
            <Link to="/">
              <img src="/images/logo.png.webp" alt=""/>
            </Link>
          </li>
          <div className="menu">
            <li>
              <Link to="/our-story">Our Story</ Link>
            </li>
            <li>
              <Link to="/shop-page">We Make</ Link>
              <ul className="sub-menu">
                {data.collections.data.map((collections) => (
                  <li key={collections.id}>
                    <Link to={`/shop-page/${collections.id}`}>{collections.categoryName}</ Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/store-location">Store Locations</ Link>
            </li>
          </div>
          <div className="menu-icons">
            <li>
              <a href="">
                <i className="fa fa-search" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
