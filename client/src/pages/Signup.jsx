import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }

    try {
      setErrorMessage(null);
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  // required
                  onChange={handleChange}
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
                  // required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: "16rem" }}
              >
                {loading ? (
                  <div
                    className="spinner-border text-light"
                    role="status"
                    aria-live="polite"
                  ></div>
                ) : (
                  "sign up"
                )}
              </button>
            </form>
            <div className="mt-3">
              <span>Have an account? </span>
              <Link className="text-decoration-none" to="/sign-in/">
                sign in
              </Link>
            </div>
            {errorMessage && (
              <h6 className="alert alert-danger mt-3">{errorMessage}</h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
