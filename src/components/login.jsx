import React, { useState } from "react";
import Image from "../assets/AnimalsPhoto.png";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(email, password);
      if (result) {
        console.log("User logged in succesfully:", result);
        navigate(`/edit_account/${result.data.id}`);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container-fluid justify-content-lg-center">
          <div className="container-fluid d-flex justify-content-center">
            <div className="circle-photo">
              <img src={Image} alt="Animals" className="circle-photo" />
            </div>
          </div>
          <div className="form-sign-up">
            <div className="email-password container-fluid">
              <div>
                <label htmlFor="formEmail" className="form-label">
                  {" "}
                  Email{" "}
                </label>
                <input
                  className="form-control me-1 full-input"
                  type="email"
                  id="formEmail"
                  placeholder="123@gmail.com"
                  value={email}
                  onChange={(e) => {
                    console.log("Email changed:", e.target.value)
                    setEmail(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="formPassword" className="form-label">
                  {" "}
                  Password{" "}
                </label>
                <input
                  className="form-control me-1 full-input"
                  type="password"
                  id="formPassword"
                  placeholder="******"
                  value={password}
                  onChange={(e) => {
                    console.log("Password changed:", e.target.value)
                    setPassword(e.target.value)}}
                />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-evenly">
            <div className="container-fluid d-flex justify-content-center">
              <button className="Login-btn btn submit"> Login </button>
            </div>

            <div className="container-fluid d-flex justify-content-center ">
              <button className="signUp-btn btn submit" onClick={() => navigate("/sign_up")}> Sign Up </button>
            </div>
          </div>

          <div class="form-text " id="basic-addon4">
            <a href=""></a>Forgot password ?
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
