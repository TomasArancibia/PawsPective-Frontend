import Image from "../assets/AnimalsPhoto.png";

const Login = () => {
  return (
    <>
      <form>
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
                />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-evenly">
            <div className="container-fluid d-flex justify-content-center">
              <button className="Login-btn btn submit"> Login </button>
            </div>

            <div className="container-fluid d-flex justify-content-center ">
              <button className="signUp-btn btn submit"> Sign Up </button>
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
