import {Link, NavLink} from "react-router-dom";
import HomePage from "./HomePage.jsx";

// NavLink que cumple la misma tarea que Link pero nos permite realizar cositas mas cheveres
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Use Context</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink to='/' className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}>
                            Home
                        </NavLink>

                        {/*Evalua si nos encontramos en la ruta*/}
                        <NavLink
                            to='/about'
                            className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}>
                            About
                        </NavLink>


                        <NavLink
                            to='/login'
                            className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}>
                            Login
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;