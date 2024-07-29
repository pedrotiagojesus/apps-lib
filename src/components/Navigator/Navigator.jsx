import { Link } from "react-router-dom";

// CSS
import "./Navigator.css";

// Data
import moduleArr from "../../DataModule";

// Utils
import { slugify } from "../../utils/Text";

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
                            to={`/apps-lib/${slugify(module.name)}`}
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
