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
import ProductCategory from "./pages/ProductCategory";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import LocationDetails from "./pages/LocationDetails";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { CartProvider } from "react-use-cart";

//import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

//apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <ApolloProvider client={client}> 
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductDetailPage/>} />
    <Route path="/productCategory/:id" element={<ProductCategory/>} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/our-story" element={<OurStory />} />
    <Route path="/shop-page" element={<ShopPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/store-location" element={<StoreLocation />} />
    <Route path="/store-location/:id" element={<LocationDetails />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
   <Footer/></ApolloProvider>
  </BrowserRouter> 
  </CartProvider>
  );
}

export default App;
