import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PAGEINTRODUCTIONS } from "../gqloperation/queries";
import { BACKEND_URL } from "../helpers";

export const OurStory = () => {
  const { loading, error, data } = useQuery(GET_PAGEINTRODUCTIONS, {
    variables: {
      postId: 2,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { additionalstuff, additionalstuff2, pageImage, pageName, pages } =
    data.post.data.attributes;

  console.log(data);
  console.log(pageImage);
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div
          style={{
            backgroundImage: `url(${
              BACKEND_URL + pageImage.data[3].attributes.url
            })`,
          }}
          class="container d-flex justify-content-center align-items-center"
        >
          <h1 class="text-white display-4">Our Story</h1>
        </div>
      </div>
      <div className="story">
        <div className="started">
            <h2>How We Started</h2> 
            <p>{pages}</p>
            <img
            src={`${BACKEND_URL + pageImage.data[1].attributes.url}`}
            alt=""
            className="our-story"
          />
        </div>
        <div className="done">
          <h2>How It Is Done</h2> 
        <img
          src={`${BACKEND_URL + pageImage.data[2].attributes.url}`}
          alt=""
          className="our-story"
        />
        <p>{additionalstuff}</p>
        </div>
        
<div className="us">
  <h2>Our Achievment and Aspirations</h2> 
        <img
          src={`${BACKEND_URL + pageImage.data[0].attributes.url}`}
          alt=""
        />
        <p>{additionalstuff2}</p>
        </div>
        
      </div>
    </div>
  );
};
