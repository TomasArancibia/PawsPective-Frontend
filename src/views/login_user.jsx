import React from "react";
import Login from "../components/login";
import { loginUser } from "../store/flux";

const LoginUser = () => {
    
    return (
        <div>
            <Login loginUser={loginUser} />
        </div>
    );
};

export default LoginUser;