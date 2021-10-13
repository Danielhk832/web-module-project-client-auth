import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialValues);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
