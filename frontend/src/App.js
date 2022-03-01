import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

//page & layout imports
import HomePage from "./pages/HomePage";

//apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
    <ApolloProvider client={client}> 
    {/* <NavBar /> */}
    <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/product/:id" element={<Product />} /> */}
    </Routes></ApolloProvider>
   
  </BrowserRouter> 
  );
}

export default App;
