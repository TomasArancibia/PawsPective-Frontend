import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Login from "../components/login";

const LoginUser = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div>
            <Login loginUser={actions.login} />
        </div>
    );
};

export default LoginUser;