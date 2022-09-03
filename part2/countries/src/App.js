import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import DetailedCountry from './components/DetailedCountry'

const App = () => {
  const [newCountry, setNewCountry] = useState('')
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleCountryChanged = (event) => setNewCountry(event.target.value)

  const countriesToShow = newCountry
  ? countries.filter(country => country.name.common.toLowerCase().includes(newCountry))
  : [];

  return (
    <>
      find countries: <input onChange={handleCountryChanged}></input>
      {
        countriesToShow.length === 1
          ? <DetailedCountry country={countriesToShow[0]}></DetailedCountry>
          : <CountryList countries={countriesToShow}></CountryList>
      }
    </>
  )
}

export default App