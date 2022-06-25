import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function RoutingComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>

        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>
    </BrowserRouter>
  );
}

function Home() {
  return <div style={{ backgroundColor: "red", width: 100 }}>Home</div>;
}

function AboutUs() {
  return <div style={{ backgroundColor: "green", width: 100 }}>About Us</div>;
}

export default RoutingComponent;
