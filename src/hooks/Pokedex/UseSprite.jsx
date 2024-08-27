export const UseSprite = (spriteArr) => {
    const prepareData = () => {
        const imageCount = countImagesInAllVersions(spriteArr);

        Object.keys(spriteArr).map((generation) => {
            let generationImageCount = 0;

            Object.keys(imageCount[generation]).map((countKey) => {
                generationImageCount += imageCount[generation][countKey];
            });

            if (generationImageCount === 0) {
                delete spriteArr[generation];
            }
        });

        Object.keys(spriteArr).map((generation) => {
            Object.keys(spriteArr[generation]).map((version) => {
                Object.keys(spriteArr[generation][version]).map(
                    (spriteType) => {
                        if (
                            spriteArr[generation][version][spriteType] ===
                                null ||
                            spriteType === "animated"
                        ) {
                            delete spriteArr[generation][version][spriteType];
                        }
                    }
                );
            });
        });

        return spriteArr;
    };

    const countImagesInVersion = (version) => {
        let count = 0;

        for (let key in version) {
            if (version[key]) {
                count++;
            }
        }

        return count;
    };

    const countImagesInAllVersions = (generations) => {
        const counts = {};

        for (let generation in generations) {
            counts[generation] = {};

            for (let version in generations[generation]) {
                counts[generation][version] = countImagesInVersion(
                    generations[generation][version]
                );
            }
        }

        return counts;
    };

    return { prepareData };
};
