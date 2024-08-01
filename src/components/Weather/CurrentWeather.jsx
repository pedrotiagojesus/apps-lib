import "./CurrentWeather.css";

const CurrentWeather = ({ weather }) => {
    return (
        <div id="current-weather">
            <h3>{weather.name}</h3>
            <img
                src={`src/assets/Weather/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
            />
            <p>{weather.main.temp} ºC</p>
            <p>{weather.weather[0].description}</p>
        </div>
    );
};

export default CurrentWeather;
