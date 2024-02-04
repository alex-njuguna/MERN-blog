import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields."));
    }

    try {
      dispatch(signInStart);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="container-md d-flex flex-column align-items-center justify-content-start  p-5">
      <div className="row">
        {/* logo half */}
        <div className="col-md-6">
          <div className="container-fluid  mx-4 p-5">
            <Link className="navbar-brand fw-bold fs-1" to="/">
              <span className="bg-danger px-3 py-1 rounded text-light">
                Alex
              </span>
              Blog
            </Link>
            <p className="mt-3 fs-6 fw-medium">
              This is a demo project, you can sign in with your email or with a
              google account.
            </p>
          </div>
        </div>

        {/* signup inputs half */}
        <div className="col-md-6">
          <div className="container-fluid mx-4 px-5 pt-2">
            <form onSubmit={handleSubmit}>
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
                  "sign in"
                )}
              </button>
            </form>
            <div className="mt-3">
              <span>Don't have an account? </span>
              <Link className="text-decoration-none" to="/sign-up/">
                sign up
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
