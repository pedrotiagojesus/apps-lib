// CSS
import "./Quiz.css";

// Component
import Card from "../../components/Card";
import Start from "../../components/Quiz/Start";
import Game from "../../components/Quiz/Game";
import End from "../../components/Quiz/End";
import Header from "../../components/Quiz/Header";

// Data
import questionArr from "../../data/Quiz";
import { useEffect, useState } from "react";

const stageArr = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

const Quiz = () => {
    const [gameStage, setGameStage] = useState(stageArr[0].name);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [question, setQuestion] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [feedbackStatus, setFeedbackStatus] = useState("");
    const [timer, setTimer] = useState(0);
    var timerId;

    useEffect(() => {
        if (timer <= 0) {
            return;
        }

        if (gameStage != "game") {
            return;
        }

        timerId = setInterval(() => {
            let tick = timer - 1;
            setTimer(tick);

            if (tick <= 0) {
                endGame();
                return;
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [timer]);

    const startGame = () => {
        setGameStage(stageArr[1].name);

        setTimer(questionArr.length * 15);
        getQuestion();
    };

    const getQuestion = () => {
        setQuestion(questionArr[currentQuestionIndex]);
        setCurrentQuestionIndex((prev) => ++prev);
    };

    const clickOption = (e) => {
        const optionSelected = e.target.value;

        if (optionSelected != question.answer) {
            setFeedback(`Wrong! The correct answer was 
        ${question.answer}`);
            setFeedbackStatus("danger");
            setTimer((prev) => prev - 10);
        } else {
            setFeedback(`Correct!`);
            setFeedbackStatus("success");
        }

        setTimeout(function () {
            setFeedback("");
            setFeedbackStatus("");

            if (questionArr.length === currentQuestionIndex) {
                endGame();
                return;
            }

            getQuestion();
        }, 2000);
    };

    const endGame = () => {
        console.log(timerId);
        clearInterval(timerId);
        setGameStage(stageArr[2].name);
        setCurrentQuestionIndex(0);
    };

    const body = (
        <>
            <Header timer={timer} />
            {gameStage === "start" && <Start startGame={startGame} />}
            {gameStage === "game" && (
                <Game
                    question={question}
                    feedback={feedback}
                    feedbackStatus={feedbackStatus}
                    clickOption={clickOption}
                />
            )}
            {gameStage === "end" && <End timer={timer} startGame={startGame} />}
        </>
    );

    return (
        <>
            <Card title="Quiz" body={body} />
        </>
    );
};

export default Quiz;
