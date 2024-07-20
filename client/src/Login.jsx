import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email: email, password: password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          // Show alert
          window.alert("Login successful!");
          navigate("/home");
        } else {
          console.log("Login failed:", result.data); 
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "20rem" }}>
        <h3 className="card-title text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <p className="mb-0">Don't have an account?</p>
          <Link to="/register" className="btn btn-light">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
