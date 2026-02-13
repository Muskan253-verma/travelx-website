import "./Login.css";
import { useState } from "react";
import { withSwal } from "react-sweetalert2";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { swal, setIsLoggedIn } = props; // make sure App passes setIsLoggedIn
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //  Check Validation
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      swal.fire({
        title: "Error",
        text: Object.values(errors).join(", "),
        icon: "error",
      });
      return;
    }

    //  credentials check 
    if (email.trim().toLowerCase() === "test@gmail.com" && password === "123456") {
      setIsLoggedIn(true); // passed from App
      swal.fire({
        title: "Success",
        text: "Login Successful 🎉",
        icon: "success",
      }).then(() => {
        navigate("/dashboard"); // redirect after success
      });
    } else {
      swal.fire({
        icon: "error",
        title: "Invalid credentials",
      });
    }
  };

  return (
    <section className="login">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default withSwal(Login);
