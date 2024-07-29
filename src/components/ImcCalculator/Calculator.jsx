import React, { useState } from "react";

const Calculator = ({ calculateImc }) => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const clearForm = (e) => {
        e.preventDefault();
        setHeight(0);
        setWeight(0);
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="weight">Weight</label>
                        <input
                            type="number"
                            className="form-control"
                            id="weight"
                            min="0"
                            step="0.01"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="heigth">Height</label>
                        <input
                            type="number"
                            className="form-control"
                            id="heigth"
                            min="0"
                            step="0.01"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex gap-2">
                <button
                    className="btn btn-primary"
                    onClick={(e) => calculateImc(e, weight, height)}
                >
                    Calculate
                </button>
                <button
                    className="btn btn-danger"
                    onClick={(e) => clearForm(e)}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Calculator;
