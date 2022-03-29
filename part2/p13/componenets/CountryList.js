import { useState } from "react"
import CountryView from './CountryView'

const CountryList = (props) => {
    const [click, setClick] = useState()
    const [singleCountry, setSingleCountry] = useState('')
    const foundCountriesLength = props.foundCountry.length
    console.log('CountryList comp: number of matches', foundCountriesLength)

    const handleClick = (props) => {
        console.log('button clikced')
        console.log(props.a)
        setSingleCountry(props.a)
        return (
            setClick(true)
        )
    }
    if (foundCountriesLength > 10) {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (foundCountriesLength <= 10 && foundCountriesLength !== 1) {
        return (
            <div>
                {props.foundCountry.map((a, i) =>
                <div key = {i}>
                    {a} <button onClick={() => handleClick({a})}>show</button>
                </div>)}
                <div>
                    {click? <CountryView countryName = {singleCountry} countries = {props.countries} />
                    :  null}
                </div>
            </div>
        )
    }
    else if (foundCountriesLength === 1) {
        const cName = props.foundCountry[0]
        return (
            <CountryView countryName = {cName} countries = {props.countries} />
        )
    }
    else {
        return null
    }
}

  export default CountryList
