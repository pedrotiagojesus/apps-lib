import { useEffect, useState } from "react";

// CSS
import "./Weather.css";

// Components
import Card from "../../components/Card";
import Search from "../../components/Weather/Search";
import CurrentWeather from "../../components/Weather/CurrentWeather";
import Forecast from "../../components/Weather/Forecast";
import Map from "../../components/Weather/Map";

// Axios
import { openWeatherMapFetch } from "../../axios/config";

// Hooks
import { useCurrentModule } from "../../hooks/useCurrentModule";
import { useGeolocation } from "../../hooks/useGeolocation";

// Context
import { useToast } from "../../context/ToastContext";

const Weather = () => {
    const { name: moduleName, slug: moduleSlug } = useCurrentModule();

    const { addToast } = useToast();

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

    const { currentPosition } = useGeolocation();

    const searchWeather = async () => {
        try {
            const responseWeather = await openWeatherMapFetch.get(
                `/weather?appid=${apiKey}&q=${city}&units=metric`
            );
            setWeather(responseWeather.data);

            const responseForecast = await openWeatherMapFetch.get(
                `/forecast?appid=${apiKey}&q=${city}&units=metric`
            );
            setForecast(responseForecast.data.list.slice(0, 5));
        } catch (error) {
            addToast({
                title: "Weather",
                message: "Error fetching weather on search!",
                status: "error",
            });
        }
    };

    // Get user coordenates
    useEffect(() => {
        const fetchData = async () => {
            const coordenates = await currentPosition();
            setLat(coordenates.lat);
            setLng(coordenates.lng);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const responseWeather = await openWeatherMapFetch.get(
                `/weather?lat=${lat}&lon=${lng}&APPID=${apiKey}&units=metric`
            );

            setWeather(responseWeather.data);

            const responseForecast = await openWeatherMapFetch.get(
                `/forecast?lat=${lat}&lon=${lng}&APPID=${apiKey}&units=metric`
            );

            setForecast(responseForecast.data.list.slice(0, 5));
        };

        try {
            if (lat && lng) {
                fetchData();
            }
        } catch (error) {
            addToast({
                title: "Weather",
                message: "Error fetching weather!",
                status: "error",
            });
        }
    }, [lat, lng]);

    const body = (
        <>
            <Search
                city={city}
                setCity={setCity}
                searchWeather={searchWeather}
            />

            {weather && <CurrentWeather weather={weather} />}
            {forecast && <Forecast forecastList={forecast} />}
            <Map lat={lat} setLat={setLat} lng={lng} setLng={setLng} />
        </>
    );

    return (
        <div id={moduleSlug}>
            <Card title={moduleName} body={body} />
        </div>
    );
};

export default Weather;
