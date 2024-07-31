import { useEffect, useState } from "react";
import Select from "react-select";

// CSS
import "./CurrencyConverter.css";

// Components
import Card from "../../components/Card";
import Loading from "../../components/Loading/Loading";

// Axios
import currencyConverterFetch from "../../axios/currencyConverter";

const CurrencyConverter = () => {
    const [currencyNameArr, setCurrencyNameArr] = useState(null);
    const [currencyNameOption, setCurrencyNameOption] = useState([]);

    const [rates, setRates] = useState(null);

    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyApiKey =
        import.meta.env.VITE_CURRENCY_CONVERTER_API_KEY || "";

    /**
     * Fetch data
     */
    useEffect(() => {
        const fetchData = async () => {
            const responseUsdValue = await currencyConverterFetch.get(
                `/${currencyApiKey}/latest/USD`
            );
            setRates(responseUsdValue.data.conversion_rates);

            const responseCodes = await currencyConverterFetch.get(
                `/${currencyApiKey}/codes`
            );
            setCurrencyNameArr(responseCodes.data.supported_codes);
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

    const body = (
        <>
            {!rates && <Loading />}

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        {currencyNameOption &&
                            currencyNameOption.length > 0 && (
                                <select
                                    className="form-select w-auto"
                                    onChange={(e) =>
                                        setFromCurrency(e.target.value)
                                    }
                                    value={fromCurrency}
                                >
                                    {currencyNameOption.map((currency) => (
                                        <option
                                            key={`from-${currency.value}`}
                                            value={currency.value}
                                        >
                                            {currency.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        <input
                            className="form-control"
                            type="number"
                            value={amount}
                            onInput={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-center">
                    <i className="fa-solid fa-down-long fa-3x mb-3"></i>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        {currencyNameOption &&
                            currencyNameOption.length > 0 && (
                                <select
                                    className="form-select w-auto"
                                    onChange={(e) =>
                                        setToCurrency(e.target.value)
                                    }
                                    value={toCurrency}
                                >
                                    {currencyNameOption.map((currency) => (
                                        <option
                                            key={`to-${currency.value}`}
                                            value={currency.value}
                                        >
                                            {currency.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        <input
                            className="form-control"
                            type="number"
                            value={convertedAmount}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div id="currency-converter">
            <Card title="Currency converter" body={body} />
        </div>
    );
};

export default CurrencyConverter;
