import React, { Component } from "react";
import NavbarCss from "./Navbar.module.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  p-3">
          <div className="container">
            <a
              className={"navbar-brand" + " " + NavbarCss.navbarbrand}
              href="#"
            >
              MovieDB
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse gap-3" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-3">
                <li className="nav-item ">
                  <a
                    className={"nav-link " + NavbarCss.Link}
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className={"nav-link " + NavbarCss.Link} href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item ">
                  <a className={"nav-link " + NavbarCss.Link} href="#">
                    Series
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
