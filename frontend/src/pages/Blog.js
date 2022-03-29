import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_BLOGPOSTS } from "../gqloperation/queries";
import { BACKEND_URL } from "../helpers";
import ReactMarkdown from 'react-markdown';
export const Blog = () => {
  const { loading, error, data } = useQuery(GET_BLOGPOSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) console.log(data);

  return (
    <div>
      Blog
      <div className="blog">
 
        {data.blogs.data.map(({ id, attributes }) => (
          // <div key={id}>
          //   <img
          //     src={`${BACKEND_URL + attributes.images.data[0].attributes.url}`}
          //     alt=""
          //   ></img>
          //   <Link to={`/blogPost/${id}`}>{attributes.title}</Link>
          //   <ReactMarkdown>{attributes.post.substring(0, 200)}</ReactMarkdown>
          //   <p>{attributes.date}</p>
          //   <Link to={`/blogPost/${id}`}><p>Read More</p></Link>
          // </div>
 <div >
<div className="card mb-3" style={{ maxWidth: "300px"}} key={id}>
<div class="row g-0">
  <div class="col-md-4">
    <img src={`${BACKEND_URL + attributes.images.data[0].attributes.url}`} class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <Link to={`/blogPost/${id}`}><h5 class="card-title">{attributes.title}</h5></Link>
      {/* <p class="card-text"><ReactMarkdown>{attributes.post.substring(0, 200)}</ReactMarkdown></p> */}
      <p class="card-text">{attributes.summary}</p>
      <p class="card-text"><small class="text-muted">{attributes.date}</small></p>
      <Link to={`/blogPost/${id}`} class="card-link"><p>Read More</p></Link>
    </div>
  </div>
</div>
</div>
</div>
        ))}
        </div>
      </div>

  );
};
