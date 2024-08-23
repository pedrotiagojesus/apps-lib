// CSS
import "./Pokedex.css";

// Components
import Card from "../../components/Card";
import { useCurrentModule } from "../../hooks/useCurrentModule";

const Pokedex = () => {
    const body = "";

    const { name: moduleName, slug: moduleSlug } = useCurrentModule();

    return (
        <div id={moduleSlug}>
            <Card title={moduleName} body={body} />
        </div>
    );
};

export default Pokedex;
