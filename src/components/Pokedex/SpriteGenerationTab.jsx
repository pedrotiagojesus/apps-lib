// Utils
import { formatGenerationName } from "../../utils/Text";

const SpriteGenerationTab = ({ generation, index }) => {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`${generation}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${generation}-tab-pane`}
                type="button"
            >
                {formatGenerationName(generation)}
            </button>
        </li>
    );
};

export default SpriteGenerationTab;
