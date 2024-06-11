import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../views/LandingPage.css';
import Pets from '../assets/pets.jpg';
import LogoSVG from '../assets/dog-solid.svg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      <header className="landing-header bg-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={LogoSVG} alt="Pawspective Logo" className="landing-logo" />
          <span className="logo-text ms-2">Pawspective</span>
        </div>  
        <nav>
            <ul className="nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#about">About</a></li>
                  <li><a className="dropdown-item" href="#features">Features</a></li>
                  <li><a className="dropdown-item" href="#contact">Contact</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="landing-main">
        <section className="landing-hero text-center bg-light py-5">
          <div className="container">
            <img src={Pets} alt="Hero" className="hero-image img-fluid" />
            <h1 className="my-4">Welcome to Pawspective</h1>
            <p className="lead">Share the love of your furry friends.</p>
            <button className="btn btn-lg text-light" onClick={handleGetStarted}>Get Started</button>
          </div>
        </section>
        <section id="about" className="landing-about py-5">
          <div className="container">
            <h2>About Us</h2>
            <p>At Pawspective, we offer a new way to interact with pet lovers.</p>
          </div>
        </section>
        <section id="features" className="landing-features py-5 bg-light">
          <div className="container">
            <h2>Features</h2>
            <ul>
              <li>Meet pet lovers like you</li>
              <li>Share pet stories</li>
              <li>Accompany other owners</li>
            </ul>
          </div>
        </section>
        <section id="contact" className="landing-contact py-5">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Email: support@pawspective.com</p>
          </div>
        </section>
      </main>
      <footer className="landing-footer bg-light py-3">
        <div className="container text-center">
          <p>&copy; 2024 Pawspective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
