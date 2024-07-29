import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/authcontext.jsx";
import "./signup.css";

const Signup = () => {
  const [regCredentials, setRegCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", regCredentials);
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response ? err.response.data : { message: "An error occurred" } });
    }
  };

  return (
    <div className="signup">
      <div className="sContainer">
        <div style={{ marginBottom: "30px" }}>
          &lt;&nbsp;
          <Link style={{ textDecoration: "none" }} to="/">
            Back
          </Link>
        </div>
        <span style={{ textAlign: "center", fontSize: "30px" }}>
          Create New Account
        </span>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          value={regCredentials.username}
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          value={regCredentials.email}
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          value={regCredentials.password}
          onChange={handleChange}
          className="sInput"
        />
        <button 
          disabled={loading} 
          onClick={handleClick} 
          className="sButton"
        >
          {loading ? "Creating..." : "Create"}
        </button>
        {error && <span className="error">{error.message}</span>}
        <span>
          Already have an account?&nbsp;
          <Link
            style={{ textDecoration: "none", color: "#eb2226" }}
            to="/login"
          >
            Login
          </Link>
          &nbsp;here.
        </span>
      </div>
    </div>
  );
};

export default Signup;
