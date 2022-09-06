import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import DetailedCountry from './components/DetailedCountry';
import CityWeather from './components/CityWeather';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [detailedCountry, setDetailedCountry] = useState({});
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, []);

  useEffect( () => {
    if (Object.entries(detailedCountry).length === 0)
    {
      setWeatherData({});
      return;
    }

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${detailedCountry.capital}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        const kelvinToCelsiusConversionFactor = 273.15;
        const weatherDataObject = {
          cityName: detailedCountry.capital,
          temperature: (Number(response.data.main.temp) - kelvinToCelsiusConversionFactor).toFixed(2), // convert from K to C
          windSpeed: response.data.wind.speed,
          iconSource: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        };
        setWeatherData(weatherDataObject);
    });
  }, [ detailedCountry ]);

  const handleFilterChanged = (event) => {
    const countryNameFilter = event.target.value;
    const newCountriesToShow = countryNameFilter
    ? countries.filter(country => country.name.common.toLowerCase().includes(countryNameFilter))
    : [];
    setCountriesToShow(newCountriesToShow)
    newCountriesToShow.length === 1 
      ? updateDetailedCountry(newCountriesToShow[0])
      : updateDetailedCountry({});
  }

  const updateDetailedCountry = (newCountry) => {
    if (Object.entries(newCountry).length === 0)
    {
      setDetailedCountry({});
      return;
    }

    if (detailedCountry.name === newCountry.name.common)
    {
      return;
    }

    const detailedCountryObject = {
      name: newCountry.name.common,
      capital: newCountry.capital,
      area: newCountry.area,
      languages: Object.values(newCountry.languages),
      flagSource: newCountry.flags.svg
    };
    setDetailedCountry(detailedCountryObject);
  }
  

  return (
    <>
      find countries: <input onChange={handleFilterChanged}></input>
      {
        countriesToShow.length > 1
        &&  <CountryList 
              countries={countriesToShow}
              handleButtonClick={updateDetailedCountry}
            ></CountryList>
      }
      {
        Object.entries(detailedCountry).length > 0 
          && <DetailedCountry
              capital={detailedCountry.capital}
              countryName={detailedCountry.name}
              countryArea={detailedCountry.area}
              countryLanguages={detailedCountry.languages}
              flagSource={detailedCountry.flagSource}
            ></DetailedCountry>
      }
      {
        Object.entries(weatherData).length > 0
          && <CityWeather
              cityName={weatherData.cityName}
              temperature={weatherData.temperature}
              windSpeed={weatherData.windSpeed}
              iconSource={weatherData.iconSource}
            />
      }
    </>
  )
}

export default App;