import React, { Component } from "react";
import logo from "../images/logotypo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Drive Automobiles logo" />
            </Link>{" "}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>{" "}

          </div>{" "}
          <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/"> Accueil </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/cars"> Collection </Link>{" "}
              </li>

              <li>
                <Link to="/events"> Evenements </Link>
              </li>
              <li>
                <Link to="/services"> Services </Link>
              </li>

              <li>
                <Link to="/about"> A propos </Link>
              </li>
              <li>
                <Link to="/contact"> contact </Link>
              </li>
            </ul>{" "}
        </div>{" "}
      </nav>
    );
  }
}
