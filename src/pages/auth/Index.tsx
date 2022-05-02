import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Authenticated } from "../../App";

import { StyledAuth } from "./styles";

interface IAuth {
    handleLogin: () => void;
    authenticated: Authenticated;
}

const Auth: FC<IAuth> = ({ authenticated, handleLogin }) => {
    useEffect(() => {
        document.title = "Log In";
    }, []);

    if (authenticated.loading) return null;
    if (authenticated.token) return <Navigate to="/" />;

    return (
        <StyledAuth>
            <button className="btn" onClick={handleLogin}>
                Continue with github
            </button>
        </StyledAuth>
    );
};

export default Auth;
