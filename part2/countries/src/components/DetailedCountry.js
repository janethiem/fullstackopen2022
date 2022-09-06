const DetailedCountry = ({ 
    capital,
    countryName,
    countryArea,
    countryLanguages,
    flagSource,
    }) => {

    return (
        <>
            <h1>{countryName}</h1>
            <p>
                capital: {capital}
                <br/>
                area: {countryArea}
            </p>
            <div>
                <b>languages:</b>
                <ul>
                    {
                        countryLanguages 
                        ? countryLanguages.map(language => <li key={language}>{language}</li>)
                        : null
                    }
                </ul>
            </div>
            <img src={flagSource} alt="country flag" width="100" height="100"></img>
        </>
    )
}

export default DetailedCountry;