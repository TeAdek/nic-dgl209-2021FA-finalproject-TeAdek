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
    <div className="flex"><img src="/images/logo.png.webp" alt="" />
      <div>
        <h2>Store</h2>
        <p>Our Story</p>
        <p>Contact Us</p>
        <p>terms and conditions</p> 
        <p>privacy policy</p>
        <p>shipping </p>
        <p> faq</p>
        <p>careers</p>
      </div>
      <div>
        <h2>Store Location</h2>
        {data.locations.data.map(({id, attributes}) => (
            <Link to={`/store-location/${id}`} key={id}>
                <p>{attributes.locationName}</p>
            </Link>
        ))}
      </div>
      <div>
        <h2>NewsLetter</h2>
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
