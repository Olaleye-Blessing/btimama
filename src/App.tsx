import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Index";
import Home from "./pages/Home/Index";
import { GlobalStyles } from "./styles/global";
import { Normalize } from "./styles/normalize";
import { Variables } from "./styles/variables";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./configs/firebase";

interface LoginRes {
    _tokenResponse: {
        idToken: string;
        refreshToken: string;
        localId: string;
        oauthAccessToken: string;
    };
}

export interface Authenticated {
    loading: boolean;
    token: string | null;
    error: string | null;
}

function App() {
    const [authenticated, setAuthenticated] = useState({
        loading: false,
        token: "",
        error: "",
    });

    const handleLogin = async () => {
        setAuthenticated((prev) => ({ ...prev, loading: true }));
        try {
            const res = (await signInWithPopup(
                auth,
                new GithubAuthProvider()
            )) as unknown as LoginRes;
            const { _tokenResponse } = res;
            const token = _tokenResponse.oauthAccessToken;
            setAuthenticated((prev) => ({
                ...prev,
                token,
            }));
        } catch (error) {
            setAuthenticated((prev) => ({
                ...prev,
                error: "There was an error trying to login. Try again",
            }));
        } finally {
            setAuthenticated((prev) => ({ ...prev, loading: false }));
        }
    };

    return (
        <>
            <Variables />
            <Normalize />
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={<Home authenticated={authenticated} />}
                />
                <Route
                    path="/auth"
                    element={
                        <Auth
                            handleLogin={handleLogin}
                            authenticated={authenticated}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
