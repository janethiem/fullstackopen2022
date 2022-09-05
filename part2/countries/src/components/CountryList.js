const CountryList = ({ countries, handleButtonClick }) => {

    const textToDisplay = countries.length <= 10
    ? countries.map(country => 
        <li key={country.name.common}>
            {country.name.common}
            <button 
                onClick={() => handleButtonClick(country)}>show
            </button>
        </li>)
    : "Too many matches, specify another filter"

    return (
        <div>
            {textToDisplay}
        </div>
    )
}

export default CountryList