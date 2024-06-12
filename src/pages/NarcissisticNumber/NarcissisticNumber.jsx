import { useState } from "react";

const NarcissisticNumber = () => {
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState("");

    const checkNumber = () => {
        let newNumber = 0;

        const digitArr = number.toString().split("");
        const numberDigit = digitArr.length;

        digitArr.map((digit) => (newNumber += digit ** numberDigit));

        if (newNumber === Number(number)) {
            setStatus("success");
        } else {
            setStatus("danger");
        }
    };

    return (
        <div id="narcissisticn-number">
            <div className="card">
                <div className="card-header">
                    <span>Narcissistic Number</span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">
                                    Number
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="number"
                                    value={number}
                                    onInput={(e) => {
                                        setNumber(e.target.value);
                                        setStatus("");
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                            <button
                                className="btn btn-primary w-100 mb-3"
                                onClick={checkNumber}
                            >
                                Check
                            </button>
                        </div>
                    </div>
                    {status === "success" && (
                        <div className="alert alert-success" role="alert">
                            Number <strong>{number}</strong> is a narcissistic
                            number
                        </div>
                    )}
                    {status === "danger" && (
                        <div className="alert alert-danger" role="alert">
                            Number <strong>{number}</strong> isn't a
                            narcissistic number
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NarcissisticNumber;
