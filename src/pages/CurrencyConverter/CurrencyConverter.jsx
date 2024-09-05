import { useEffect, useState } from "react";

// CSS
import "./CurrencyConverter.css";

// Components
import Card from "../../components/Card";
import Loading from "../../components/Loading/Loading";

// Axios
import currencyConverterFetch from "../../axios/currencyConverter";

// Hooks
import { useCurrentModule } from "../../hooks/useCurrentModule";
import documentTitle from "../../hooks/useDocumentTitle";

const CurrencyConverter = () => {
    const { name: moduleName, slug: moduleSlug } = useCurrentModule();
    documentTitle(moduleName);

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

    const handleSwap = () => {
        const tempFrom = fromCurrency;
        const tempTo = toCurrency;

        setFromCurrency(tempTo);
        setToCurrency(tempFrom);
    };

    const body = (
        <>
            <form>
                <div>
                    <label htmlFor="amout" className="form-label">
                        Amount
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount}
                        onInput={(e) => setAmount(e.target.value)}
                    />
                </div>

                {currencyNameOption && currencyNameOption.length > 0 && (
                    <div>
                        <label htmlFor="from-currency" className="form-label">
                            From
                        </label>
                        <select
                            className="form-select"
                            onChange={(e) => setFromCurrency(e.target.value)}
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
                    </div>
                )}

                <button
                    className="btn btn-primary rounded-circle align-self-end"
                    type="button"
                    onClick={() => handleSwap()}
                >
                    <i className="fa-solid fa-right-left"></i>
                </button>

                {currencyNameOption && currencyNameOption.length > 0 && (
                    <div>
                        <label htmlFor="to-currency" className="form-label">
                            To
                        </label>
                        <select
                            className="form-select"
                            onChange={(e) => setToCurrency(e.target.value)}
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
                    </div>
                )}
            </form>

            <div className="result">
                <p className="before">
                    {amount} {fromCurrency} =
                </p>
                <p className="after">
                    {convertedAmount} {toCurrency}
                </p>
            </div>
        </>
    );

    return (
        <div id={moduleSlug}>
            <Card title={moduleName} body={body} />
            {!rates && <Loading />}
        </div>
    );
};

export default CurrencyConverter;
