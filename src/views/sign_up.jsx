import "./sign_up.css"
import Image from "../assets/AnimalsPhoto.png"


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
                    <input className="form-control me-1" type="name" placeholder="Name" />
                    <input className="form-control ms-1" type="Lastname" placeholder="LastName" />
                </div>

                <div className="username-age-input container-fluid">
                    <input className="form-control me-1" type="Username" placeholder="Username" />
                    <input className="form-control ms-1 w-25" type="number" placeholder="1" defaultValue={1} />
                </div>
                <div className="email-password container-fluid">
                    <input className="form-control me-1 full-input" type="email" placeholder="Email" />
                    <input className="form-control me-1 full-input" type="password" placeholder="Password" />
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <button className="signUp-btn btn"> Sign Up </button>
            </div>
        </>
    );
};

export default SignUp;