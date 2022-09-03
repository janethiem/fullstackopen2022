const CountryList = ({ countries }) => {

    const textToDisplay = countries.length <= 10
    ? countries.map(country => <li key={country.name.common}>{country.name.common}</li>)
    : "Too many matches, specify another filter"

    return (
        <div>
            {textToDisplay}
        </div>
    )
}

export default CountryList