const End = ({ timer, startGame }) => {
    return (
        <div id="end">
            <h2>All Done!</h2>
            <p className="score-final">
                Your final score is:
                <span> {timer}</span>
            </p>
            <button className="btn btn-primary" onClick={() => startGame()}>
                Retry
            </button>
        </div>
    );
};

export default End;
