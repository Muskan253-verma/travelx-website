import { useState } from "react";
import "./Signup.css";
import { withSwal } from "react-sweetalert2";

function Signup(props) {
  const { swal } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (confirm !== password) {
      newErrors.confirm = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      swal.fire({
        title: "Error",
        text: "Please fill all fields correctly",
        icon: "error",
      });
    } else {
      swal.fire({
        title: "Success",
        text: "Account Created Successfully 🎉",
        icon: "success",
      });

      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
    }
  };

  return (
    <section className="signup">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join us and start your journey</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button type="submit">Sign Up</button>

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default withSwal(Signup);
