import React from "react";

const Card = ({ card, onClick }) => {
    return (
        <div
            type="button"
            className={`btn btn-secondary memory-game-card ${
                card.isFlipped ? "flipped" : ""
            }`}
            onClick={() => onClick(card)}
        >
            {card.isFlipped ? card.value : "?"}
        </div>
    );
};

export default Card;
