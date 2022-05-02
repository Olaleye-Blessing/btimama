import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Index";
import Home from "./pages/Home/Index";
import { GlobalStyles } from "./styles/global";
import { Normalize } from "./styles/normalize";
import { Variables } from "./styles/variables";

function App() {
    return (
        <>
            <Variables />
            <Normalize />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    );
}

export default App;
