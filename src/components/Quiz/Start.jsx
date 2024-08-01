import React from "react";

const Start = ({ startGame }) => {
    return (
        <div id="start">
            <h1>Coding Quiz Challenge</h1>
            <p>
                Try to answer the following code-related questions. Keep in mind
                that incorrect answers will penalize your score!
            </p>
            <button className="btn btn-primary" onClick={startGame}>
                Start Quiz
            </button>
        </div>
    );
};

export default Start;
