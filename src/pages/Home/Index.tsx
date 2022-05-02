import { FC } from "react";
// import Header from "../../modules/Header";
import Info from "../../modules/Info";
import Repositories from "../../modules/Repositories";
import { StyledHome } from "./styles";

const Home: FC = () => {
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
