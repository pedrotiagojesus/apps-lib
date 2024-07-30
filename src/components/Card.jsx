import React from "react";

const Card = ({ title, body }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span>{title}</span>
            </div>
            <div className="card-body">{body}</div>
        </div>
    );
};

export default Card;
