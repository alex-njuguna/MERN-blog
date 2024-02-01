import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const path = useLocation().pathname;
  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{ backgroundColor: "#ffdbdc" }}
    >
      <div className="container-fluid">
        <div className="custom-container">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <span className="bg-danger px-3 py-1 rounded text-light">
                Alex
              </span>
              Blog
            </Link>
          </div>

          <div className="search">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "100px" }}
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="links">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${path === "/" && "active"}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${path === "/dashboard/" && "active"}`}
                    to="dashboard/"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${path === "/projects/" && "active"}`}
                    to="projects/"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="#others">
            <Link
              className="btn btn-outline-dark border-0 me-2 hide-me"
              href=""
            >
              <i className="fa-solid fa-moon fa-lg"></i>
            </Link>
            <Link
              className="btn btn-sm btn-outline-info border text-dark fw-bold sign-in"
              to="sign-in"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
