import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div className="custom-container">
          <div className="logo">
            <Link class="navbar-brand" to="/">
              <span className="bg-danger px-3 py-1 rounded text-light">
                Alex
              </span>
              Blog
            </Link>
          </div>

          <div className="search">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "100px" }}
              />
              <button class="btn btn-outline-success" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="links">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="dashboard/">
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="projects/">
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
              <i class="fa-solid fa-moon fa-lg"></i>
            </Link>
            <Link
              className="btn btn-sm btn-outline-warning border-0 text-dark"
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
