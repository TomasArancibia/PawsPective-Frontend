import { useState } from 'react';
import injectContext from './store/appContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import EditAccount from './views/edit-account.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/edit_account" element={<EditAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
