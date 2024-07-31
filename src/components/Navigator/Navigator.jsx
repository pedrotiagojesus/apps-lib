import { Link } from "react-router-dom";

// CSS
import "./Navigator.css";

// Data
import moduleArr from "../../data/Module";

// Utils
import { slugify } from "../../utils/Text";

// Hooks
import { useCurrentURL } from "../../hooks/useCurrentUrl";

const Navigator = () => {
    const currentUrl = useCurrentURL();

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
                            className={`nav-link ${
                                `/apps-lib/${slugify(module.name)}` ===
                                currentUrl.pathname
                                    ? "active"
                                    : ""
                            }`}
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
