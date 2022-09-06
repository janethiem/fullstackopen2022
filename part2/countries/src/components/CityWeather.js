const CityWeather = ({
    cityName,
    temperature,
    iconSource,
    windSpeed
}) => {
    return (
        <>
            <h2>Weather in {cityName}</h2>
            <p>
                temperature: {temperature} Celsius
                <br/>
                <img src={iconSource} alt="weather icon" width="42" height="42"></img>
                <br/>
                wind: {windSpeed} m/s
            </p>
        </>
    )
}

export default CityWeather;
