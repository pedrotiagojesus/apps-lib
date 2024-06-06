import { Link } from "react-router-dom";
import "./Navigator.css";

import moduleArr from "../../DataModule";

const Navigator = () => {
    return (
        <>
            <nav id="menu-vertical" className="navbar navbar-expand-lg">
                <div
                    id="menu-vertical-content"
                    className="content collapse navbar-collapse"
                >
                    {moduleArr.map((module) => (
                        <Link
                            key={module.name}
                            className="nav-link"
                            to={module.route}
                        >
                            {module.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navigator;
