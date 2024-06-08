import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Login from "../components/login";

const LoginUser = () => {
    const { actions } = useContext(Context);
    
    return (
        <div>
            <Login login={actions.login} />
        </div>
    );
};

export default LoginUser;