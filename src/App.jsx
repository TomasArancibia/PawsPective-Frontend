import { useState } from "react";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';

import SignUp from './views/sign_up.jsx';
import Navbars from "./components/navbars";
import Footer from "./components/footer";
import EditAccount from "./views/edit-account.jsx";
import Feed from "./views/feed.jsx";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbars />
      <Footer />
        <Link to="/edit_account" className="btn btn-primary m-1 p-1">
          Edit Account
        </Link>
        <Link to="/" className="btn btn-primary m-1 p-1">
          Home
        </Link>
        <Link to="/sign_up" className="btn btn-primary m-1 p-1">
          Sign Up
        </Link>
        <Link to="/feed" className="btn btn-primary m-1 p-1">
          Feed
        </Link>
        <Routes>
          <Route path="/edit_account" element={<EditAccount />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default injectContext(App);
