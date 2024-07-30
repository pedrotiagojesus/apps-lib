import { useState } from "react";

// CSS
import "./RockPaperScissor.css";

// Components
import Card from "../../components/Card";

const optionArr = [
    {
        name: "Rock",
        value: "rock",
        icon: "fa-solid fa-hand-back-fist",
    },
    {
        name: "Paper",
        value: "paper",
        icon: "fa-solid fa-hand",
    },
    {
        name: "Scissor",
        value: "scissor",
        icon: "fa-solid fa-hand-scissors",
    },
];

const RockPaperScissor = () => {
    const [humanChoice, setHumanChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [humanScore, setHumanScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const handleButtonClick = (value) => {
        setHumanChoice(value);

        const computerOptionSelected =
            optionArr[Math.floor(Math.random() * optionArr.length)];
        setComputerChoice(computerOptionSelected);

        winnerLogic(value, computerOptionSelected);
    };

    const winnerLogic = (human, computer) => {
        if (human.value == computer.value) {
            return;
        } else if (
            (human.value == "rock" && computer.value == "scissor") ||
            (human.value == "scissor" && computer.value == "paper") ||
            (human.value == "paper" && computer.value == "rock")
        ) {
            setHumanScore((prev) => prev + 1);
            return;
        } else {
            setComputerScore((prev) => prev + 1);
            return;
        }
    };

    const body = (
        <>
            <div className="d-flex gap-2 mb-3">
                {optionArr.map((obj) => (
                    <button
                        key={obj.value}
                        className="btn btn-primary flex-fill py-3"
                        type="button"
                        onClick={() => handleButtonClick(obj)}
                    >
                        <i className={`me-2 ${obj.icon}`}></i>
                        {obj.name}
                    </button>
                ))}
            </div>

            <div className="row display">
                <div className="col-6">
                    <span className="name">You</span>
                    {humanChoice.icon && (
                        <i className={`icon ${humanChoice.icon}`}></i>
                    )}
                    <span className="score">{humanScore}</span>
                </div>
                <div className="col-6">
                    <span className="name">Computer</span>
                    {computerChoice.icon && (
                        <i className={`icon ${computerChoice.icon}`}></i>
                    )}
                    <span className="score">{computerScore}</span>
                </div>
            </div>
        </>
    );

    return (
        <div id="rock-papper-scissor">
            <Card title="Rock Papper Scissor" body={body} />
        </div>
    );
};

export default RockPaperScissor;
