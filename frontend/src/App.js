import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart/:id?" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
