const CountryView = (props) => {
    console.log('CountryView rendered')
    const countryDetails = (arr, que) => {
        return arr.filter(ob => (ob).name.common === que)
    }
    const countryViewDetails = countryDetails(props.countries, props.countryName)
    const langObj = countryViewDetails.map(c => c.languages)
    const langArr = langObj.map(c => Object.values(c))
    const countryViewLang = langArr[0]
    console.log(countryViewLang)

    return (
        <div>
            <h3>{countryViewDetails.map((a, i) =>
                <div key = {i}>{a.name.common}</div>)}
            </h3>
            <div>
                {countryViewDetails.map((a, i) =>
                <div key = {i}>Capital {a.capital}</div>)}
                {countryViewDetails.map((a, i) =>
                <div key = {i}>Area {a.area}</div>)}
            </div>
            <h3>Languages</h3>
            <ul>
                {countryViewLang.map((a, i) =>
                    <li key = {i}>{a}</li>)}
            </ul>
            <p>{countryViewDetails.map((a, i) => <img key = {i} src = {a.flags.png}/>)}</p>
        </div>
    )
}

export default CountryView
