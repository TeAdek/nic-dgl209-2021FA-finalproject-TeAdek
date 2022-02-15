import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Product from "./Product"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<Product />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
