import React from "react";

export default function Footer() {
  const date = new Date();

  return (
    <div
      className="container-fluid mt-5 bg-dark border-danger"
      style={{ position: "relative", bottom: 0 }}
    >
      <footer className="text-center text-lg-start ">
        <div className="container d-flex justify-content-center py-3">
          <button
            type="button"
            className="btn btn-outline-primary btn-lg btn-floating mx-2 rounded-circle"
          >
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-lg btn-floating mx-2"
          >
            <i className="fab fa-youtube" aria-label="YouTube"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-lg btn-floating mx-2"
          >
            <i className="fab fa-instagram" aria-label="Instagram"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-lg btn-floating mx-2"
          >
            <i className="fab fa-x" aria-label="Twitter"></i>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-white py-3">
          &copy; {date.getFullYear()} <span>All rights reserved - </span>
          <a
            className="text-white text-decoration-none"
            href="https://alex-njuguna.github.io"
            target="_blank"
          >
            Alex Njuguna
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}
