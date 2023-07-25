import {Routes, Route, Navigate, Link} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import LoginPage from "./LoginPage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import Navbar from "./Navbar.jsx";
import UserProvider from "./Context/UserProvider.jsx";
//Los provider se coloca lo mas arriiba del arbol de componentes

export const MainApp = () => {
    //CUalquier elemento dentro del provider obtendran la informacion de este
    return (
        <UserProvider>
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
        </UserProvider>
    )
}