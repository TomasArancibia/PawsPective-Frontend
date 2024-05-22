import { useState } from "react";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import EditAccount from "./views/edit-account.jsx";

import Navbar from "./components/navbar";
import SignUp from "./views/sign_up.jsx";
import Login from "./components/login.jsx";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Login />
        <Footer />

        <Routes>
          <Route path="/edit_account" element={<EditAccount />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
