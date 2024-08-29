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
                Search
            </button>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#weather-map"
            >
                <i className="fa-solid fa-map-location"></i>
            </button>
        </div>
    );
};

export default Search;
