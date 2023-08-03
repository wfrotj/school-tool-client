import React from "react";
import teacherService from "../../services/teacherService";
import loginService from "../../services/loginService";
import { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    loginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedTeacher", JSON.stringify(res));
        teacherService.setToken(res.token);
        console.log(res);
        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      Login
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
