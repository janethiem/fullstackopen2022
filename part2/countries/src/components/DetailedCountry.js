
const DetailedCountry = ({ country }) => {
    const capital = country?.capital[0] ?? "This country has no capital";
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>
                capital: {capital}
                <br/>
                area: {country.area}
            </p>
            <div>
                <b>languages:</b>
                <ul>
                    {Object.entries(country.languages).map(entry => <li key={entry[0]}>{entry[1]}</li>)}
                </ul>
            </div>
            <img src={country.flags.svg} alt="country flag" width="100" height="100"></img>
        </div>
    )
}

export default DetailedCountry