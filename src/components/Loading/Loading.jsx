import { TrophySpin } from "react-loading-indicators";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <TrophySpin color="#32cd32" size="large" text="" textColor="" />
        </div>
    );
};

export default Loading;
