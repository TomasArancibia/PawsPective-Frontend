import { useState } from 'react';
import injectContext from './store/appContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
