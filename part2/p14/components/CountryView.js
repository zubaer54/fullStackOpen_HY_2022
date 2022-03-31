import Weather from "./Weather"
const CountryView = (props) => {
    console.log('CountryView rendered')
    const countryDetails = (arr, que) => {
        return arr.filter(ob => (ob).name.common === que)
    }
    const countryViewDetails = countryDetails(props.countries, props.countryName)
    console.log(countryViewDetails)
    console.log(countryViewDetails[0].capital)
    const langObj = countryViewDetails.map(c => c.languages)
    const langArr = langObj.map(c => Object.values(c))
    const countryViewLang = langArr[0]
    console.log(countryViewLang)

    return (
        <div>
            <h3>{countryViewDetails[0].name.common}</h3>
            <div>Capital {countryViewDetails[0].capital}</div>
            <div>Area {countryViewDetails[0].area}</div>
            <h3>Languages</h3>
            <ul>
                {countryViewLang.map((a, i) =>
                    <li key = {i}>{a}</li>)}
            </ul>
            <p>{countryViewDetails.map((a, i) => <img key = {i} src = {a.flags.png}/>)}</p>
            <Weather cap = {countryViewDetails[0].capital}/>
        </div>
    )
}
export default CountryView
