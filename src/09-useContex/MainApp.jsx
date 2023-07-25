import {Routes, Route, Navigate, Link} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import LoginPage from "./LoginPage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import Navbar from "./Navbar.jsx";

export const MainApp = () => {
    return (
        <>
            <h1>Main App</h1>
            <Navbar />
            <hr/>

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="login" element={<LoginPage />}/>
                <Route path="about" element={<AboutPage />}/>
                {/*While card*/}
                <Route path="/*" element={<Navigate  to={"/about"}/>}/>
                
            </Routes>
        </>
    )
}