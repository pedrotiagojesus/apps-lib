import "./CurrentWeather.css";

const CurrentWeather = ({ weather }) => {
    const data = {
        temp: `${weather.main.temp} `,
        image: `src/assets/Weather/${weather.weather[0].icon}.png`,
        description: weather.weather[0].description,
        name: weather.name,
    };

    return (
        <div id="current-weather">
            <img src={data.image} alt={data.description} />
            <p className="temperature">
                {data.temp} <span>ºC</span>
            </p>
            <p className="description">{data.description}</p>
            <h3 className="name">{data.name}</h3>
        </div>
    );
};

export default CurrentWeather;
