import "./Forecast.css";

const Forecast = ({ forecastList }) => {
    // Prepare data
    const dataArr = [];

    forecastList.forEach((forecast) => {
        const date = new Date(forecast.dt * 1000);
        const hours = date.getUTCHours();

        dataArr.push({
            temp: `${forecast.main.temp} ºC`,
            image: `src/assets/Weather/${forecast.weather[0].icon}.png`,
            description: forecast.weather[0].description,
            hour: hours,
        });
    });

    return (
        <div id="forescast">
            <h4>Forecast for the next few hours</h4>
            <ul>
                {dataArr.map((data, i) => (
                    <li key={i} className="flex-fill" title={data.description}>
                        <span>{data.temp}</span>
                        <img src={data.image} alt={data.description} />
                        {data.hour}h
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forecast;
