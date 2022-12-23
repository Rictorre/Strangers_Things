import React, { useState } from "react";
import { fetchLogin } from "../api";
import { Link,useHistory } from "react-router-dom";


const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  hasUser,
  setHasUser,
  setIsLoggedIn,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = await fetchLogin(e.target[0].value, e.target[1].value),
      token = await userProfile.data.token;
    let localToken = localStorage.setItem("token", token);
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    setIsLoggedIn(true);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);

  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

  };
  // const [buttonPopup, setButtonPopup] = useState (false);

  // const history = useHistory();
 
  return (
    <div className="logInform">
      <form id="forms" onSubmit={handleSubmit}>
        <input id="username"
          type="text"
          placeholder="username"
          onChange={handleUsername}
        ></input>
        <input id="password"
          type="text"
          placeholder="password"
          onChange={handlePassword}
        ></input>
        <button id="submitButton" type="submit">Submit</button>
        <Link id="newUserLink" to="./createUser">Dont have and Account? Create one here</Link>
      </form>
    </div>
  );
};

export default Login;