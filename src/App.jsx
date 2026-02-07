import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing the Navbar
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Importing Pages from the components folder
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Patient from "./components/Patient";
import Photos from "./components/Photos";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <ScrollToTop/>
      <Navbar />
     
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;