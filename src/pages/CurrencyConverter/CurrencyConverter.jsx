import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import "./CurrencyConverter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

const CurrencyConverter = () => {
    const [currencyNameArr, setCurrencyNameArr] = useState(null);
    const [currencyNameOption, setCurrencyNameOption] = useState([]);

    const [rates, setRates] = useState(null);

    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    /**
     * Fetch data
     */
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(
                    "https://v6.exchangerate-api.com/v6/654486f72ea8292f55c2de95/latest/USD"
                )
                .then((response) => {
                    setRates(response.data.conversion_rates);
                })
                .catch((error) => console.log(error));

            await axios
                .get(
                    "https://v6.exchangerate-api.com/v6/654486f72ea8292f55c2de95/codes"
                )
                .then((response) => {
                    setCurrencyNameArr(response.data.supported_codes);
                })
                .catch((error) => console.log(error));
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (currencyNameArr) {
            Array(currencyNameArr).map((blockArr) => {
                blockArr.map((row) => {
                    const opt = {
                        value: `${row[0]}`,
                        label: `${row[0]} - ${row[1]}`,
                    };
                    setCurrencyNameOption((prevArray) => [...prevArray, opt]);
                });
            });
        }

        console.log(currencyNameOption);
    }, [currencyNameArr]);

    useEffect(() => {
        if (rates) {
            const rateFrom = rates[fromCurrency] ?? 0;
            const rateTo = rates[toCurrency] ?? 0;

            setConvertedAmount(
                parseFloat(((amount / rateFrom) * rateTo).toFixed(2))
            );
        }
    }, [rates, fromCurrency, toCurrency, amount]);

    if (!rates) {
        return <h1>A carregar...</h1>;
    }

    return (
        <div id="currency-converter">
            <div className="card">
                <div className="card-header">
                    <span>Currency converter</span>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="number"
                            value={amount}
                            onInput={(e) => setAmount(e.target.value)}
                        />
                        {currencyNameOption &&
                            currencyNameOption.length > 0 && (
                                <Select
                                    className="mb-0 w-25"
                                    onChange={(e) => setFromCurrency(e.value)}
                                    options={currencyNameOption}
                                    defaultValue={currencyNameOption[42]}
                                />
                            )}
                    </div>

                    <div className="mb-3 text-center">
                        <FontAwesomeIcon icon={faDownLong} size="3x" />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="number"
                            value={convertedAmount}
                            readOnly
                        />
                        {currencyNameOption &&
                            currencyNameOption.length > 0 && (
                                <Select
                                    className="mb-0 w-25"
                                    onChange={(e) => setToCurrency(e.value)}
                                    options={currencyNameOption}
                                    defaultValue={currencyNameOption[147]}
                                />
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
