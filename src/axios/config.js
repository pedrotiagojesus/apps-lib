import axios from "axios";

const openWeatherMapFetch = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

const translateFetch = axios.create({
    baseURL: "https://google-api31.p.rapidapi.com/gtranslate",
});

translateFetch.defaults.headers.common["x-rapidapi-key"] =
    "52f60a1141msh61637c05d4a2c44p173419jsnaef9250f4179";
translateFetch.defaults.headers.common["x-rapidapi-host"] =
    "google-api31.p.rapidapi.com";
translateFetch.defaults.headers.common["Content-Type"] = "application/json";

export { openWeatherMapFetch, translateFetch };
