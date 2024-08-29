export const Ai = (victoryLines) => {
    const move = (squares) => {
        return selectPosition(squares);
    };

    const selectPosition = (squares) => {
        let position = randomIntFromInterval(0, 8);

        if (!squares[position]) {
            return position;
        } else {
            position = selectPosition(squares);
        }

        return position;
    };

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return { move };
};
