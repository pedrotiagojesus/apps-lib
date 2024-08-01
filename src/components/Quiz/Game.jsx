const Game = ({ question, feedback, feedbackStatus, clickOption }) => {
    return (
        <div id="game">
            <h2>{question.prompt}</h2>
            <div className="option-select row">
                {question.options.map((option, index) => (
                    <div className="col-md-6" key={index}>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={(e) => clickOption(e)}
                            value={option}
                        >
                            {option}
                        </button>
                    </div>
                ))}
            </div>
            {feedback && (
                <div
                    className={`alert alert-${feedbackStatus} mt-3 mb-0`}
                    role="alert"
                >
                    {feedback}
                </div>
            )}
        </div>
    );
};

export default Game;
