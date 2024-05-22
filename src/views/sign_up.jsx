import "./sign_up.css";
import Image from "../assets/AnimalsPhoto.png";

const SignUp = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div className="circle-photo">
          <img src={Image} alt="Animals" className="circle-photo" />
        </div>
      </div>
      <div className="form-sign-up">
        <div className="name-lastname-input container-fluid">
          <div className="me-2">
            <label htmlFor="formLastname" className="form-label ms-2">
              {" "}
              Name{" "}
            </label>
            <input
              className="form-control me-1"
              type="name"
              id="formName"
              placeholder="Jane"
            />
          </div>
          <div className="ms-2">
            <label htmlFor="formName" className="form-label ms-2">
              {" "}
              Lastname{" "}
            </label>
            <input className="form-control" type="Lastname" placeholder="Doe" />
          </div>
        </div>

        <div className="username-age-input container-fluid">
          <div className="me-2 w-75">
            <label htmlFor="formUser" className="form-label ms-2">
              {" "}
              Username{" "}
            </label>
            <input
              className="form-control"
              type="Username"
              id="formUser"
              placeholder="JaneDoe23"
            />
          </div>
          <div className="ms-2 w-25">
            <label htmlFor="formAge" className="form-label ms-2">
              {" "}
              Age{" "}
            </label>
            <input
              className="form-control"
              type="number"
              id="formAge"
              placeholder="1"
              defaultValue={1}
            />
          </div>
        </div>
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
              placeholder="JaneDoe@gmail.com"
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
              placeholder="**********"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <button className="signUp-btn btn submit"> Sign Up </button>
        <NavLink
          className="circle-element mb-0 text-light"
          to="/sign_up"
        ></NavLink>
      </div>
    </>
  );
};

export default SignUp;
