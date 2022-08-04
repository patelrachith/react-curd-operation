import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Test from './Components/Test';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

export default function App() {
  return (
    <>
      <div>
        <h1>React Application</h1>
        <hr />
        <Header />
        {/* <Home />
        <About />
        <Contact /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        {/* <Test /> */}
      </div>
    </>
  );
}
