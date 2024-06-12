import { Link } from "react-router-dom";
import moduleArr from "../../DataModule";

import "./Homepage.css";

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
                            <Link to={module.route} className="btn btn-primary">
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
