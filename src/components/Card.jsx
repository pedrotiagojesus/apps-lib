import React from "react";

const Card = ({ title, body, styleBody }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span>{title}</span>
            </div>
            <div className="card-body" style={styleBody}>
                {body}
            </div>
        </div>
    );
};

export default Card;
