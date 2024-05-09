import "./sign_up.css"



const SignUp = () => {

    return (
        <>
            <div className="form-sign-up">
                <div className="name-lastname-input">
                    <input className="form-control me-3" type="name" placeholder="Name" />
                    <input className="form-control ms-3" type="Lastname" placeholder="LastName" />
                </div>

                <div className="username-age-input">
                    <input className="form-control me-3" type="Username" placeholder="Username" />
                    <input className="form-control ms-3 w-25" type="number" placeholder="1" defaultValue={1} />
                </div>
                <div className="email-password">
                    <input className="form-control me-3 full-input" type="email" placeholder="Email" />
                    <input className="form-control me-3 full-input" type="password" placeholder="Password" />
                </div>
            </div>
        </>
    );
};

export default SignUp;