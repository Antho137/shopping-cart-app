import React from "react";
import Layout from "./components/Layout";
import Home from './components/Home';
import About from './components/About';
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {

  return ( 
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>     
    </div>
  )
}

export default App
