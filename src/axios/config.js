import axios from "axios";

const openWeatherMapFetch = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

const translateApiKey = import.meta.env.VITE_TRANSLATE_API_KEY || "";

const translateFetch = axios.create({
    baseURL: "https://google-api31.p.rapidapi.com/gtranslate",
});

translateFetch.defaults.headers.common["x-rapidapi-key"] = translateApiKey;
translateFetch.defaults.headers.common["x-rapidapi-host"] =
    "google-api31.p.rapidapi.com";
translateFetch.defaults.headers.common["Content-Type"] = "application/json";

export { openWeatherMapFetch, translateFetch };
