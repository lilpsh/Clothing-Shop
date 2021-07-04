import React, { useState, useEffect } from "react";

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      props.history.push("/");
    }
  }, []);

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && password !== "") {
      console.log({
        name: name,
        password: password,
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name, id: Date.now() })
      );
      props.history.push("/");
    } else {
      console.log("Fill all inputs");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="form-title">Login</h1>

        <input
          type="email"
          className="form-email"
          onChange={handleOnChangeName}
          placeholder="Enter your email"
        />
        <input
          type="password"
          className="form-password"
          onChange={handleOnChangePassword}
          placeholder="Enter your password"
        />

        <button className="form-submit">Login</button>
      </form>
    </div>
  );
}
