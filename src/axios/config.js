import axios from "axios";

// Weather
const openWeatherMapFetch = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

// Translation
const translateApiKey = import.meta.env.VITE_TRANSLATE_API_KEY || "";

const translateFetch = axios.create({
    baseURL: "https://google-api31.p.rapidapi.com/gtranslate",
});

translateFetch.defaults.headers.common["x-rapidapi-key"] = translateApiKey;
translateFetch.defaults.headers.common["x-rapidapi-host"] =
    "google-api31.p.rapidapi.com";
translateFetch.defaults.headers.common["Content-Type"] = "application/json";

// Hello
const helloFetch = axios.create({
    baseURL: "https://hellosalut.stefanbohacek.dev",
});

export { openWeatherMapFetch, translateFetch, helloFetch };
