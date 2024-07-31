import axios from "axios";

const currencyConverterFetch = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6",
});

export default currencyConverterFetch;
