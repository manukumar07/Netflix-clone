import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const MNavbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h3>Netflix..</h3>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              
            </ul>
        </div>
        <div className="search-btn">
      <input type='search' placeholder="search"></input>
        </div>
        <div className="btn">
          <button>Sign-in</button>
        </div>
      </nav>
    </>
  );
};

export default MNavbar;
