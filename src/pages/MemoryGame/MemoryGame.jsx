// CSS
import "./MemoryGame.css";

// Components
import Board from "../../components/MemoryGame/Board";
import { useState } from "react";

const shuffleArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }

    return array;
};

const generateCardArr = () => {
    const valueArr = ["A", "B", "C", "D", "E", "F", "G", "H"];

    const cardArr = valueArr.map((value) => ({ value, isFlipped: false }));

    const duplicatedCards = cardArr
        .concat([...cardArr])
        .map((card, index) => ({ ...card, id: index }));

    return shuffleArray(duplicatedCards);
};

const MemoryGame = () => {
    const playerAttempts = 100;

    const [cardArr, setCardArr] = useState(generateCardArr());
    const [attempt, setAttempt] = useState(playerAttempts);
    const [flippedCardArr, setFlippedCardArr] = useState([]);

    const result = cardArr.filter((card) => card.isFlipped).length;

    const resetGame = () => {
        setCardArr(generateCardArr());
        setAttempt(playerAttempts);
    };

    const handleCardClick = (cardClicked) => {
        if (attempt === 0) {
            return;
        }

        if (flippedCardArr.length === 2) {
            return;
        }

        const newCard = cardArr.map((card) => {
            if (card.id === cardClicked.id) {
                return { ...card, isFlipped: true };
            }
            return card;
        });

        setCardArr(newCard);

        setFlippedCardArr([...flippedCardArr, cardClicked]);

        if (flippedCardArr.length === 1) {
            setTimeout(() => {
                const [firstCard] = flippedCardArr;

                if (firstCard.value != cardClicked.value) {
                    const resetCards = cardArr.map((card) => {
                        return card.id === firstCard.id ||
                            card.id === cardClicked.id
                            ? { ...card, isFlipped: false }
                            : card;
                    });

                    setCardArr(resetCards);
                    setAttempt((prev) => prev - 1);
                }

                setFlippedCardArr([]);
            }, 600);
        }
    };

    return (
        <div id="memory-game">
            <div className="card">
                <div className="card-header">
                    <span>Memory Game</span>
                </div>
                <div className="card-body">
                    <Board cardArr={cardArr} onCardClick={handleCardClick} />

                    {result === cardArr.length ? (
                        <h2>Congrats, you win!</h2>
                    ) : attempt === 0 ? (
                        <p>Game over!</p>
                    ) : (
                        <p className="mb-0">You have {attempt} attempt(s)</p>
                    )}
                    <button
                        className="btn btn-primary"
                        onClick={() => resetGame()}
                    >
                        Reset game
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemoryGame;
