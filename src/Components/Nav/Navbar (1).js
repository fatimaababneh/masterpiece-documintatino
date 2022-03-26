import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Header(props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-nav">
        <Link to="/">
          {/* <img src="../.././public/new vision"/> */}
          <span style={{color:"blue", }}>New Vision</span>
        </Link>

        <button className="burger-menu" onClick={() => setShowNav(!showNav)}>
          <i className="fas fa-bars"></i>
          {/* Menu */}
        </button>

      </div>

      <div className="nav-options">
        <ul id={showNav ? "hidden" : null}>
          <li>
            {" "}
            <Link to="/">HOME</Link>
          </li>
          
            <li>
            {" "}
            <Link to="/profile">PROFILE</Link>
          </li>
          
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {" "}
            <Link to="/cards">SHOP</Link>
          </li>
        </ul>
      </div>

      <div className="register-btn">
        <ul id={showNav ? "hiddenbtn" : null}>
          <li>
            {!props.logged && (
              <Link to="/login">
                <button  className="login-btn-header">Login</button>
              </Link>
            )}
          </li>
          <li>
            {props.logged ? (
              <Link to="/login">
                <button
                  className="logout-btn-header"
                  onClick={() => {
                    localStorage.removeItem("loggedUser");
                    props.setLogged(localStorage.getItem("loggedUser"));
                  }}
                >
                  Logout
                </button>
              </Link>
            ) : null}
          </li>
          <li>
            {!props.logged && (
              <Link to="/signup">
                {" "}
                <button className="signup-btn-header">Signup</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
