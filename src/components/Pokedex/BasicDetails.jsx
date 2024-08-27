// CSS
import "./Pokedex.css";

const BasicDetails = ({ pokemon, pokemonSpecie }) => {
    // Get Pokemon genus
    const pokemonGeneraEntry = pokemonSpecie.genera.find(
        (entry) => entry.language.name === "en"
    );
    const pokemonGenus = pokemonGeneraEntry.genus;

    return (
        <div
            id="basic-detail"
            style={{
                backgroundColor: pokemonSpecie.color.name,
            }}
        >
            <div className="identification">
                <div className="block-name">
                    <div className="name">{pokemon.name}</div>
                    <div className="gendera">{pokemonGenus}</div>
                </div>
                <div className="id">#{String(pokemon.id).padStart(4, "0")}</div>
            </div>
            <div className="image">
                <img alt="front" src={pokemon.sprites.front_default} />
                <img alt="back" src={pokemon.sprites.back_default} />
            </div>
            <div className="type">
                <div className="header">Type</div>
                <div className="items">
                    {pokemon.types.map((entry, index) => (
                        <div key={index}>{entry.type.name}</div>
                    ))}
                </div>
            </div>
            <div className="ability">
                <div className="header">Abilities</div>
                <div className="items">
                    {pokemon.abilities.map((entry, index) => (
                        <div key={index} className="item">
                            {entry.ability.name}
                            {entry.is_hidden ? (
                                <div className="info">Hidden Ability</div>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="dimension">
                <div className="height">
                    <div className="header">Height</div>
                    <div className="items">{pokemon.height / 10} m</div>
                </div>
                <div className="weight">
                    <div className="header">Weight</div>
                    <div className="items">{pokemon.weight / 10} Kg</div>
                </div>
            </div>

            <div className="cry">
                <div className="header">Cry</div>
                <div className="items">
                    <audio controls key={pokemon.id}>
                        <source src={pokemon.cries.latest} type="audio/ogg" />
                    </audio>
                </div>
            </div>
        </div>
    );
};

export default BasicDetails;
