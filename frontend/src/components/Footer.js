import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_LOCATIONS } from "../gqloperation/queries";

export default function Footer() {
    const {loading, error, data} = useQuery(GET_LOCATIONS)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    console.log(data)

  return (
    <div className="footer">
    <div className="flex">
        <img src="/images/logo.png.webp" alt="" />
      <div>
        <h2 className="first-type">Store</h2>
        <Link to="/our-story" className="footer-link"><p>Our Story</p></Link>
        <p className="footer-link">Contact Us</p>
        <p className="footer-link">Terms and Conditions</p> 
        <p className="footer-link">Privacy Policy</p>
        <p className="footer-link">Shipping </p>
        <p className="footer-link"> Faq</p>
        <p className="footer-link">Careers</p>
      </div>
      <div>
        <h2>Store Location</h2>
        {data.locations.data.map(({id, attributes}) => (
            <Link className="footer-link" to={`/store-location/${id}`} key={id}>
                <p>{attributes.locationName}</p>
            </Link>
        ))}
      </div>
      <div>
        <h2>Follow Us</h2>
      </div></div>
      
      <div className="trademark">
        <p>© 2022 SOMA chocolatemaker</p>
      </div>
    </div>
  );
}
