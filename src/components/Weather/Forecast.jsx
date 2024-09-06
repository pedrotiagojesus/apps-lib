const Forecast = ({ forecast }) => {
    const date = new Date(forecast.dt * 1000);
    const hours = date.getUTCHours();

    // Prepare data
    const data = {
        temp: `${Math.ceil(forecast.main.temp)} `,
        image: `Weather/${forecast.weather[0].icon}.png`,
        description: forecast.weather[0].description,
        hour: hours,
    };

    return (
        <div className="forecast">
            <div className="day">{data.hour}h</div>
            <img src={data.image} alt={data.description} />
            <div className="degrees">{data.temp}°C</div>
        </div>
    );
};

export default Forecast;
