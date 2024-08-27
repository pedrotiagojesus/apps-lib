import BasicDetails from "./BasicDetails";
import Effectiveness from "./Effectiveness";
import Sprite from "./Sprite";
import Stats from "./Stats";

const Pokemon = ({ pokemon, pokemonSpecie }) => {
    return (
        <div id="pokemon" key={pokemon.name}>
            <div className="row">
                <div className="col-md-5">
                    <BasicDetails
                        pokemon={pokemon}
                        pokemonSpecie={pokemonSpecie}
                    />
                </div>
                <div id="more-info" className="col-md-7">
                    <Stats statArr={pokemon.stats} />
                    <Sprite pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
                </div>
            </div>
        </div>
    );

    /**
     *
            <h5>Learnset</h5>
     */
};

export default Pokemon;
