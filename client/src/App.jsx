import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hotels from "./pages/Hotels";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import BookHotel from "./pages/BookHotel";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/book-hotel" element={<BookHotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
