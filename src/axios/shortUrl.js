import axios from "axios";

const shortUrlFetch = axios.create({
    baseURL: "https://api.tinyurl.com",
});

const tinyUrlApiKey = import.meta.env.VITE_TINY_URL_API_KEY || "";

shortUrlFetch.defaults.headers.common[
    "Authorization"
] = `Bearer ${tinyUrlApiKey}`;

export default shortUrlFetch;
