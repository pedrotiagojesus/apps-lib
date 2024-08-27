// Hooks
import { UseSprite } from "../../hooks/Pokedex/UseSprite";

// Components
import SpriteGenerationContent from "./SpriteGenerationContent";
import SpriteGenerationTab from "./SpriteGenerationTab";

const Sprite = ({ pokemon, pokemonSpecie }) => {
    const { prepareData } = UseSprite(pokemon.sprites.versions);

    const spriteArr = prepareData();
    const backgroundColor = pokemonSpecie.color.name;

    return (
        <div id="sprite">
            <h3>Sprite</h3>
            <div className="row">
                <div className="col-md-4">
                    <ul
                        className="nav nav-tabs flex-column generation-list"
                        role="tablist"
                        style={{
                            backgroundColor: backgroundColor,
                        }}
                    >
                        {Object.keys(spriteArr).map((generation, index) => (
                            <SpriteGenerationTab
                                key={`tab-${generation}`}
                                generation={generation}
                                index={index}
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="tab-content">
                        {Object.keys(spriteArr).map((generation, index) => (
                            <SpriteGenerationContent
                                spriteArr={spriteArr}
                                key={`content-${generation}`}
                                generation={generation}
                                index={index}
                                backgroundColor={backgroundColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sprite;
