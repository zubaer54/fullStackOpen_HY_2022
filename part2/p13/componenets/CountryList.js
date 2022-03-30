import CountryView from "./CountryView"
import ListView from "./ListView"
const CountryList = ({foundCountry, countries}) => {
    const foundCountriesLength = foundCountry.length
    console.log('CountryList comp: number of matches', foundCountriesLength)
    if (foundCountriesLength === 0){
        return null
    }
    else if (foundCountriesLength > 10) {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (foundCountriesLength <= 10 && foundCountriesLength !== 1) {
        return (
            <div>
                <ListView foundCountry = {foundCountry} countries = {countries} />
            </div>
        )
    }
    else if (foundCountriesLength === 1) {
        const cName = foundCountry[0]
        return (
            <CountryView countryName = {cName} countries = {countries} />
        )
    }
}
export default CountryList
