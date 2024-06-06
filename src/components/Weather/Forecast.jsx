import "./Forecast.css";

const Forecast = ({ forecastList }) => {
    return (
        <div id="forescast">
            <h4>Forecast for the next few hours</h4>
            <ul>
                {forecastList.map((forecast, i) => (
                    <li key={i}>
                        <img
                            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                            alt={forecast.weather[0].description}
                        />
                        {forecast.main.temp} ºC -{" "}
                        {forecast.weather[0].description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forecast;
