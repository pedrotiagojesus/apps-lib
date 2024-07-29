import { Link } from "react-router-dom";

// CSS
import "./Homepage.css";

// Data
import moduleArr from "../../data/Module";

// Utils
import { slugify } from "../../utils/Text";

const Homepage = () => {
    return (
        <div id="homepage-content" className="row">
            {moduleArr.map((module) => (
                <div
                    key={module.name}
                    className="col-md-6 col-lg-12 col-xl-6 col-xxl-4"
                >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{module.name}</h5>
                            <p className="card-text">{module.description}</p>
                            <Link
                                to={`/apps-lib/${slugify(module.name)}`}
                                className="btn btn-primary"
                            >
                                See more
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Homepage;
