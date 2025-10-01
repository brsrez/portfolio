import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
