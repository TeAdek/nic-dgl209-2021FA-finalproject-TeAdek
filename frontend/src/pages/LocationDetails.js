import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_LOCATIONDETAILS } from "../gqloperation/queries";
import { BACKEND_URL } from "../helpers";

export default function LocationDetails() {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(GET_LOCATIONDETAILS, {
    variables: {
      locationId: id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  const {
    address,
    locationDescription,
    locationImage,
    locationName,
    openFor,
    phoneNumber,
  } = data.location.data.attributes;

  return (
    <div
      style={{
        backgroundImage: `url(${
          BACKEND_URL + locationImage.data[1].attributes.url
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
       
      }}>
          <div className="space"></div>
      <div className="location">
          <div className="location-detail">
              <h1>{locationName}</h1>
        <p>{address}</p>
        <p>{phoneNumber}</p>
        <div style={{width: "300px"}}><hr className="border-line"/></div>
        <p>{openFor}</p>
        <img
        className="location-map"
          src={`${BACKEND_URL + locationImage.data[0].attributes.url}`}
          alt={locationName}
        />
        <p className="location-text">{locationDescription}</p></div>
        
      </div>
      <div className="space"></div>
    </div>
  );
}
