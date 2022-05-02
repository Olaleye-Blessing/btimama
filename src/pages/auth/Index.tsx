import { FC, useEffect, useState } from "react";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./../../configs/firebase";

import { StyledAuth } from "./styles";

interface LoginRes {
    _tokenResponse: {
        idToken: string;
        refreshToken: string;
        localId: string;
        oauthAccessToken: string;
    };
}

const Auth: FC = () => {
    useEffect(() => {
        document.title = "Log In";
    }, []);

    const [authenticated, setAuthenticated] = useState({
        loading: false,
        token: null,
        error: null,
    });

    const handleLogin = async () => {
        setAuthenticated((prev) => ({ ...prev, loading: true }));
        try {
            const res = (await signInWithPopup(
                auth,
                new GithubAuthProvider()
            )) as unknown as LoginRes;
            const { _tokenResponse } = res;
            console.log(_tokenResponse);
        } catch (error) {
            console.log(error);
        } finally {
            setAuthenticated((prev) => ({ ...prev, loading: false }));
        }
    };

    console.log({ authenticated });

    return (
        <StyledAuth>
            <button onClick={handleLogin}>Continue with github</button>
        </StyledAuth>
    );
};

export default Auth;
