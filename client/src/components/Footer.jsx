import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();

  return (
    <div
      className="container-fluid mt-5"
      style={{ width: "100%", margin: "0px" }}
    >
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#3f51b5" }}
      >
        <div className="container-fluid-fluid">
          <section className="">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2 mb-3 fw-bold fs-5">
                <Link className="navbar-brand" to="/">
                  <span className="bg-danger px-3 py-1 rounded text-light">
                    Alex
                  </span>
                  Blog
                </Link>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/about/" className="text-white">
                    About us
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/dashboard/" className="text-white">
                    Dashboard
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/projects/" className="text-white">
                    Projects
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/sign-up/" className="text-white">
                    Create an Account
                  </Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="fst-italic">
                  "With hard work all things increase and grow."
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
            <Link to="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {date.getFullYear()} <span>Copyright - </span>
          <Link
            className="text-white text-decoration-none fst-italic"
            to="https://alex-njuguna.github.io"
            target="_blank"
          >
            Alex Njuguna
          </Link>
        </div>
      </footer>
    </div>
  );
}
