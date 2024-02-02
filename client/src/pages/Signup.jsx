import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container-fluid mt-5 p-5">
      <div className="row">
        {/* logo half */}
        <div className="col-md-6">
          <div className="container-fluid d-flex flex-column align-items-start justify-content-center mx-5 p-5">
            <Link className="navbar-brand fw-bold fs-1" to="/">
              <span className="bg-danger px-3 py-1 rounded text-light">
                Alex
              </span>
              Blog
            </Link>
            <p className="mt-3 fs-6 fw-medium">
              This is a demo project, you can sign in with your email or with
              google.
            </p>
          </div>
        </div>

        {/* signup inputs half */}
        <div className="col-md-6">
          <div className="container-fluid d-flex flex-column align-items-start justify-content-center mx-5 px-5 pt-2">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <button type="submit" className="btn btn-primary">
                sign up
              </button>
            </form>
            <div className="mt-3">
              <span>Have an account? </span>
              <Link className="text-decoration-none" to="/sign-in/">sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
