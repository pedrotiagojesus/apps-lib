import "./CurrentWeather.css";

// Components
import Forecast from "./Forecast";

const CurrentWeather = ({ weather, forecastList }) => {
    const data = {
        temp: `${Math.ceil(weather.main.temp)} `,
        image: `Weather/${weather.weather[0].icon}.png`,
        description: weather.weather[0].description,
        name: weather.name,
    };
    return (
        <div id="current-weather">
            <div className="card">
                <div className="card-text">
                    {data.name}
                    <p className="temp">{data.temp}°C</p>
                    <p className="weather">{data.description}</p>
                    <img src={data.image} alt={data.description} />
                </div>

                <div className="card-bottom">
                    {forecastList.map((forecast) => (
                        <Forecast forecast={forecast} />
                    ))}
                </div>
            </div>
        </div>
    );

    /**
     * Sensação temporal: main.feels_like
     * Humidade: main.humidity
     * Temperatura: main.temp
     * Pais ISO2: sys.country
     * Nascer do sol: sys.sunrise
     * Por do sol: sys.sunset
     * Timezone: timezone
     * Velocidade vento: wind.speed
     * Direção do vento: wind.deg
     */
};

export default CurrentWeather;
