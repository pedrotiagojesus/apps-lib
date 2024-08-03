import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <nav id="menu-horizontal" className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/apps-lib">
                        APP's Lib
                    </Link>
                    <button
                        id="button-menu-vertical-content"
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu-vertical-content"
                    >
                        <span className="fa-solid fa-bars"></span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Header;
