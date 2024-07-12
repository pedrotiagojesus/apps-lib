import "./Square.css";

const Square = ({ value, handleClick }) => {
    return (
        <button className="square ratio ratio-1x1" onClick={handleClick}>
            <div className="display">
                {value ? <i className={`fa-solid ${value}`}></i> : ""}
            </div>
        </button>
    );
};

export default Square;
