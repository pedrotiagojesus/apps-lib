import React from "react";

const Input = ({ value, onInputValue }) => {
    const validDigits = (text) => {
        return parseFloat(text.replace(/[^0-9,]/g, ""));
    };

    return (
        <input
            type="text"
            className="form-control"
            value={value}
            maxLength="3"
            onInput={(e) => onInputValue(validDigits(e.target.value))}
        />
    );
};

export default Input;
