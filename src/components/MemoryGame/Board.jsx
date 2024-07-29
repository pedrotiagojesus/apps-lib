// Components
import Card from "./Card";

const Board = ({ cardArr, onCardClick }) => {
    return (
        <div className="board">
            {cardArr.map((card) => (
                <Card key={card.id} card={card} onClick={onCardClick} />
            ))}
        </div>
    );
};

export default Board;
