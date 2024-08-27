import axios from "axios";

// Pokedex
const pokedexFetch = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export default pokedexFetch;
