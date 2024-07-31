import axios from "axios";

// Weather
const openWeatherMapFetch = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

export default currencyConverterFetch;
