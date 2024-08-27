export const slugify = (str) => {
    return String(str)
        .normalize("NFKD") // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace(/-+/g, "-"); // remove consecutive hyphens
};

export const convertToTitleCase = (str) => {
    if (!str) {
        return "";
    }

    return str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
            return word.charAt(0).toUpperCase().concat(word.substr(1));
        });
};

export const formatGenerationName = (generation) => {
    const romanNumerals = {
        i: "I",
        ii: "II",
        iii: "III",
        iv: "IV",
        v: "V",
        vi: "VI",
        vii: "VII",
        viii: "VIII",
        ix: "IX",
        x: "X",
    };

    const parts = generation.split("-");
    const generationName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    const romanNumeral = romanNumerals[parts[1]];

    return `${generationName} ${romanNumeral}`;
};

export const removeSlugStyle = (slug) => {
    return slug.split(/[-_]/).join(" ");
};
