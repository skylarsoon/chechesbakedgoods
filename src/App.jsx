import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Menu from './pages/Menu.jsx'
import NotFound from './pages/NotFound.jsx'
import Admin from './pages/Admin.jsx'
import TestFirebase from './pages/testFirebase.jsx';

function App() {

  return (
    <>
      <div className="h-screen bg-lime-50">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<TestFirebase />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes> 
        <p>Copyright &#169; Rachel Asa</p>
      </div>
    </>
  );
}

export default App;
