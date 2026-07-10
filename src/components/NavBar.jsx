import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="#"
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Bebas Neue",
            fontStyle: "italic",
            fontSize: "24px",
          }}
        >
          Car Showroom{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/add">
              Add Product
            </Link>
            <Link className="nav-link active" aria-current="page" to="/all">
              All Product
            </Link>
            <Link className="nav-link" to="/search">
              Search Product
            </Link>
            <Link className="nav-link" to="/delete">
              Delete Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
