import { useState } from "react";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

import SignUp from "./views/sign_up.jsx";
import Navbars from "./components/navbars";
import Footer from "./components/footer";
import EditAccount from "./views/edit-account.jsx";
import Feed from "./views/feed.jsx";
import NewPost from "./views/new_post.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Footer />
        <Routes>
          <Route path="/edit_account" element={<EditAccount />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/new_post/:id" element={<NewPost />} />
          <Route path="/new_post/" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
