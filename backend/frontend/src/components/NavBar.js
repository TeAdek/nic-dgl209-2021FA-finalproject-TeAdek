import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONLIST } from "../gqloperation/queries";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.css";

import { useCart } from "react-use-cart";

function NavBar() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COLLECTIONLIST);
  const jwt = localStorage.getItem("jwt");
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  const { totalItems } = useCart();

  console.log(totalItems);

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
              <div className="menu">
                <li class="nav-item active">
                  <Link
                    to="/our-story"
                    class="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Our Story
                  </Link>
                </li>

                <li class="nav-item drop_down">
                  <Link to="/shop-page" class="nav-link">
                    We Make
                  </Link>
                  <div class="dropdown__menu" aria-labelledby="navbarDropdown">
                    <ul>
                      {data.collections.data.map((collections) => (
                        <li className="submenu-link">
                          <Link
                            to={`/productCategory/${collections.id}`}
                            key={collections.id}
                          >
                            {collections.attributes.categoryName}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
                </li>
              </div>

              <div className="menu-icons">
                <li class="nav-item">
                  {jwt ? (
                    <>
                      <div class="dropdown">
                        <div
                          class="dropdown-toggle"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <FontAwesomeIcon icon={faUser} color="white" />
                        </div>
                        <ul
                          class="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <li onClick={logout} class="nav-item">
                            {" "}
                            Logout{" "}
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/login" class="nav-link">
                        Login
                      </Link>
                    </>
                  )}
                </li>

                <li class="nav-item">
                  <Link
                    to="/cart"
                    class="nav-link position-relative"
                  >
                    <i className="fa fa-shopping-cart" />{" "}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                      <span class="visually-hidden">
                        unchecked cart products
                      </span>
                    </span>
                  </Link>

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
