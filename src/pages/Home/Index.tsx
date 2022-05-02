import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Authenticated } from "../../App";
// import Header from "../../modules/Header";
import Info from "../../modules/Info";
import Repositories from "../../modules/Repositories";
import { StyledHome } from "./styles";

interface IHome {
    authenticated: Authenticated;
}

const Home: FC<IHome> = ({ authenticated }) => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    if (authenticated.loading) return null;
    if (authenticated.error)
        return (
            <div className="flex height column">
                <p>{authenticated.error}</p>
                <div>
                    <Link to="/auth" className="btn">
                        Login Page
                    </Link>
                </div>
            </div>
        );
    if (!authenticated.token)
        return (
            <div className="flex height column">
                <p>You are not logged in</p>
                <div>
                    <Link to="/auth" className="btn">
                        Login Page
                    </Link>
                </div>
            </div>
        );

    return (
        <StyledHome>
            {/* <Header /> */}
            <div className="flex">
                <Info />
                <Repositories />
            </div>
        </StyledHome>
    );
};

export default Home;
