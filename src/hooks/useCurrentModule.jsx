// Data
import moduleArr from "../data/Module";

// Urils
import { slugify } from "../utils/Text";

// Hooks
import { useCurrentURL } from "./useCurrentUrl";

export const useCurrentModule = () => {
    const currentUrl = useCurrentURL();

    const module = moduleArr.find((_) => {
        return `/apps-lib/${slugify(_.name)}` === currentUrl.pathname;
    });

    return {
        name: module.name,
        slug: slugify(module.name),
        description: module.description,
        url: `/apps-lib/${slugify(module.name)}`,
    };
};
