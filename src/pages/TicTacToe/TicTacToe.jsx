import { useEffect, useState } from "react";

// CSS
import "./TicTacToe.css";

// Components
import Card from "../../components/Card";
import Square from "../../components/TicTacToe/Square";

// Hooks
import { Ai } from "../../hooks/TicTacToe/Ai";

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [yourTurn, setYourTurn] = useState(true);
    const [symbolInUse, setSymbolInUse] = useState("fa-x");

    const victoryLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const { move: aiSelectPosition } = Ai(victoryLines);

    const makeThePlay = async (position) => {
        const newSquares = squares.slice();

        newSquares[position] = symbolInUse;

        setSquares(newSquares);
        setYourTurn(!yourTurn);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setYourTurn(true);
    };

    const handleClick = (i) => {
        if (squares[i] || winner) {
            return;
        }

        makeThePlay(i);
    };

    const calculateWinner = (squares) => {
        for (let i = 0; i < victoryLines.length; i++) {
            const [a, b, c] = victoryLines[i];

            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }

        return null;
    };

    const winner = calculateWinner(squares);

    useEffect(() => {
        if (!yourTurn && !winner) {
            setTimeout(() => {
                const position = aiSelectPosition(squares);

                if (position != null) {
                    makeThePlay(position);
                }
            }, 1000);
        }
    }, [symbolInUse, winner]);

    useEffect(() => {
        if (yourTurn) {
            setSymbolInUse("fa-x");
        } else {
            setSymbolInUse("fa-o");
        }
    }, [yourTurn]);

    const body = (
        <div className="board ">
            <div className="status">
                {winner ? (
                    <p className="winner">
                        The winner is:{" "}
                        <i className={`fa-solid ${winner} icon`}></i>
                    </p>
                ) : (
                    <>
                        <i className={`fa-solid ${symbolInUse} icon`}></i>
                        TURN
                    </>
                )}
            </div>
            <div className="row">
                {squares.map((value, index) => (
                    <div className="col-4" key={index}>
                        <Square
                            value={squares[index]}
                            handleClick={() => handleClick(index)}
                        />
                    </div>
                ))}
            </div>

            <button className="btn btn-primary" onClick={resetGame}>
                Reset
            </button>
        </div>
    );

    return (
        <div id="tic-tac-toe">
            <Card title="Tic Tac Toe" body={body} />
        </div>
    );
};

export default TicTacToe;
