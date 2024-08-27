import { removeSlugStyle } from "../../utils/Text";

const SpriteVersion = ({ spriteArr, generation, version }) => {
    console.log(spriteArr[generation][version]);
    return (
        <div className="version" key={version}>
            <h5>{removeSlugStyle(version)}</h5>
            <div className="items">
                {Object.keys(spriteArr[generation][version]).map(
                    (spriteType, index) => (
                        <img
                            key={`${index}-${spriteType}`}
                            src={spriteArr[generation][version][spriteType]}
                            alt={spriteType}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default SpriteVersion;
