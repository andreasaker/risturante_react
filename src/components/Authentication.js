import React, { useState } from "react";
import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const Authentication = ({ setStatus }) => {
  const loginInit = { username: "", password: "" };
  const [loginInfo, setLoginInfo] = useState(loginInit);
  const USERNAME = JSON.stringify(process.env.USERNAME);
  const PASSWORD = process.env.PASSWORD;

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (loginInfo.username === USERNAME && loginInfo.password === PASSWORD) {
      setStatus(true);
      setLoginInfo(loginInit);
    } else {
      console.log("wrong");
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="title">Log in</div>
      <input
        required
        type="text"
        name="username"
        value={loginInfo.username}
        onChange={e => handleChange(e)}
        placeholder="Username"
      />
      <input
        required
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={e => handleChange(e)}
        placeholder="Password"
      />
      {loginInfo.username} {USERNAME}
      <br />
      {loginInfo.password} {PASSWORD}
      <button>Login</button>
    </form>
  );
};

const mapDisptachToProps = dispatch => ({
  setStatus: status => dispatch(loggedIn(status))
});

export default connect(
  null,
  mapDisptachToProps
)(Authentication);
