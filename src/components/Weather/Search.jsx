import "./Search.css";

const Search = ({ city, setCity, searchWeather }) => {
    return (
        <div id="weather-search">
            <input
                className="form-control"
                type="text"
                value={city}
                onInput={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={searchWeather}>
                Buscar
            </button>
        </div>
    );
};

export default Search;
