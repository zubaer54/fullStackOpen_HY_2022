const CountryView = (props) => {

    const foundCountries = (arr, que) => {
        return arr.filter(ob => (ob).name.common === que)
    }
    const foundCountry = foundCountries(props.countries, props.countryName)
    const lungi = foundCountry.map(c => (c).languages)
    const difLang = lungi.map(a => Object.values(a))

    const differLang = difLang[0] // from [[x, y]] to [x, y]
    return (
    <div>
        <h2>{foundCountry.map((a, index) =>
            <div key = {index}>{a.name.common}</div>)}
        </h2>
        <div>
            {foundCountry.map((a, index) => 
            <div key = {index}>Capital {a.capital}</div>)}
            {foundCountry.map((a, index) => 
            <div key = {index}>Area {a.area} square kms</div>)}
        </div>
        <h3>Languages</h3>
        <ul>
            {differLang.map(a =>
            <li>{a}</li>)}
        </ul>
        <p>{foundCountry.map(a => <img src = {a.flags.png}/>)}</p>
    </div>
    )
}

export default CountryView
