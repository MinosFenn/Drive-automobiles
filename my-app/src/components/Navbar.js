import React, { useState, Component } from "react";
import logo from "../images/logotypo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  closeMobileMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  // aos in class component
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <nav data-aos="fade-down" className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Drive Automobiles logo" />
            </Link>{" "}
            <button
              data-aos="fade-down"
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight data-aos="fade-down" className="nav-icon" />
            </button>{" "}
          </div>{" "}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.closeMobileMenu}>
                {" "}
                Accueil{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/cars" onClick={this.closeMobileMenu}>
                {" "}
                Stock{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/sold" onClick={this.closeMobileMenu}>
                {" "}
                Vendu{" "}
              </Link>
            </li>
            {/* 
              <li>
                <Link to="/events"> Evenements </Link>
              </li> */}
            {/* <li>
              <Link to="/services" onClick={this.closeMobileMenu}>
                {" "}
                Services{" "}
              </Link>
            </li> */}
            <li>
              <Link to="/about" onClick={this.closeMobileMenu}>
                {" "}
                A propos{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.closeMobileMenu}>
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>{" "}
        </div>{" "}
      </nav>
    );
  }
}
