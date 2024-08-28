import { removeSlugStyle } from "../../utils/Text";

const SpriteVersion = ({ spriteArr, generation, version }) => {
    return (
        <div className="version" key={version}>
            <span className="version-name">{removeSlugStyle(version)}</span>
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
