import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONLIST } from "../gqloperation/queries";
import { Link, useNavigate } from "react-router-dom";

import "font-awesome/css/font-awesome.css";

function NavBar() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COLLECTIONLIST);
  const jwt = localStorage.getItem("jwt");
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) console.log(data);
console.log(data.collections.data);
  return (
    <div className="body">
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
          <Link to="/" className="logo-nav navbar-brand">
            <img src="/images/logo.png.webp" alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <div className="menu"><li class="nav-item">
                <Link
                  to="/our-story"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Our Story
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  to="/shop-page"
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  We Make
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {data.collections.data.map((collections) => (
                  
                    <Link to={`/productCategory/${collections.id}`} class="dropdown-item" key={collections.id}>{collections.attributes.categoryName}</ Link>
                 
                ))}
                </div>
                </li>
              <li class="nav-item">
                <Link to="/blog" class="nav-link">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/store-location" class="nav-link">
                  Store Locations
                </Link>
              </li></div>
              

              <div className="menu-icons">
                <li class="nav-item">
                  {jwt ? (
                    <>
                      <li onClick={logout} class="nav-item">
                        <button>Logout</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <Link to="/login" class="nav-link">Login</Link>
                    </>
                  )}
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <i className="fa fa-search" />
                  </a>
                </li>

                <li class="nav-item">
                  <a href="" class="nav-link">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </li>
              </div>
            </ul>
         
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
