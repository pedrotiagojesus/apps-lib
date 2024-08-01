const Header = ({ timer }) => {
    return (
        <div id="header">
            <span className="timer">
                Timer: <span>{timer}</span>
            </span>
        </div>
    );
};

export default Header;
