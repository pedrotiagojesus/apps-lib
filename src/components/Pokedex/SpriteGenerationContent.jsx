import React from "react";
import SpriteVersion from "./SpriteVersion";

const SpriteGenerationContent = ({
    spriteArr,
    generation,
    index,
    backgroundColor,
}) => {
    return (
        <div
            className={`tab-pane fade  ${index === 0 ? "show active" : ""} `}
            id={`${generation}-tab-pane`}
            role="tabpanel"
        >
            <div
                className="content"
                style={{
                    backgroundColor: backgroundColor,
                }}
            >
                {Object.keys(spriteArr[generation]).map((version) => (
                    <SpriteVersion
                        spriteArr={spriteArr}
                        generation={generation}
                        version={`${version}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SpriteGenerationContent;
