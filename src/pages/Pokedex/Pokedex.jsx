import { useState } from "react";
import axios from "axios";

// CSS
import "./Pokedex.css";
import pokedexFetch from "../../axios/pokedex";

// Axios

// Components
import Card from "../../components/Card";
import Search from "../../components/Pokedex/Search";
import Pokemon from "../../components/Pokedex/Pokemon";
import Loading from "../../components/Loading/Loading";

// Hooks
import { useCurrentModule } from "../../hooks/useCurrentModule";

// Context
import { useToast } from "../../context/ToastContext";

const Pokedex = () => {
    const { name: moduleName, slug: moduleSlug } = useCurrentModule();

    const { addToast } = useToast();

    const [searchTerm, setSetSearchTerm] = useState("Pikachu");
    const [pokemon, setPokemon] = useState(null);
    const [pokemonSpecie, setPokemonSpecie] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await axios
                .all([
                    pokedexFetch.get(
                        `pokemon/${searchTerm.toLocaleLowerCase()}/`
                    ),
                    pokedexFetch.get(
                        `pokemon-species/${searchTerm.toLocaleLowerCase()}/`
                    ),
                ])
                .then(
                    axios.spread((pokemon, specie) => {
                        setPokemon(pokemon.data);
                        setPokemonSpecie(specie.data);
                    })
                );
        } catch (error) {
            console.log(error);
            setPokemon(null);
            setPokemonSpecie(null);

            addToast({
                title: "Pokédex",
                message: "Pokemon not found!",
                status: "error",
            });

            Toast;
        } finally {
            setLoading(false);
        }

        console.log("pokemon", pokemon);
        console.log("pokemonSpecie", pokemonSpecie);
    };

    const body = (
        <>
            <Search
                searchTerm={searchTerm}
                setSetSearchTerm={setSetSearchTerm}
                handleSearch={handleSearch}
            />
            {pokemon && (
                <Pokemon pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
            )}
        </>
    );

    return (
        <div id={moduleSlug}>
            <Card title={moduleName} body={body} />
            {loading && <Loading />}
        </div>
    );
};

export default Pokedex;
