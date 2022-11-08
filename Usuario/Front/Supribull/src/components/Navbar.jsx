import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Supribull
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
              <a className="nav-link" href="/help">
                Help
              </a>
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
              <a className="nav-link" href="/post">
                Post
              </a>
              <a className="nav-link" href="/messages">
                Messages
              </a>
              <a className="nav-link" href="/notification">
                Notifications
              </a>
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
