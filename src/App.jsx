import { useState } from 'react';
import injectContext from './store/appContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';

import SignUp from './views/sign_up.jsx';
import Navbars from "./components/navbars";
import Footer from "./components/footer";


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbars />
      <Footer />
        <Routes>
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default injectContext(App);
