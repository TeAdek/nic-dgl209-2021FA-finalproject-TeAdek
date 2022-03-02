import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

//page & layout imports
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage"
import NavBar from "./components/NavBar";
import { Blog } from "./pages/Blog";
import { OurStory } from "./pages/OurStory";
import { ShopPage } from "./pages/ShopPage";
import { StoreLocation } from "./pages/StoreLocation";

//apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
    <ApolloProvider client={client}> 
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductDetailPage/>} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/our-story" element={<OurStory />} />
    <Route path="/shop-page" element={<ShopPage />} />
    <Route path="/store-location" element={<StoreLocation />} />
    </Routes></ApolloProvider>
   
  </BrowserRouter> 
  );
}

export default App;
