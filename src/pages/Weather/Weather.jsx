import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Search from "../../components/Weather/Search";
import CurrentWeather from "../../components/Weather/CurrentWeather";
import Forecast from "../../components/Weather/Forecast";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

    const searchWeather = async () => {
        try {
            const responseWeather = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`
            );
            setWeather(responseWeather.data);

            const responseForecast = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric`
            );
            setForecast(responseForecast.data.list.slice(0, 5));
        } catch (error) {
            console.log(`Erro ao buscar clima: ${error}`);
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const responseWeather = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`
            );
            setWeather(responseWeather.data);

            const responseForecast = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`
            );
            setForecast(responseForecast.data.list.slice(0, 5));
        });
    }, [apiKey]);

    return (
        <div id="weather">
            <div className="card">
                <div className="card-header">
                    <span>Weather</span>
                </div>

                <div className="card-body">
                    <Search
                        city={city}
                        setCity={setCity}
                        searchWeather={searchWeather}
                    />

                    {weather && <CurrentWeather weather={weather} />}
                    {forecast && <Forecast forecastList={forecast} />}
                </div>
            </div>
        </div>
    );
};

export default Weather;
