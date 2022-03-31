import { useState } from "react"
import CountryView from "./CountryView"

const ListView = ({foundCountry, countries}) => {
    const [sn, setSN] = useState('')
    const [click, setClick] = useState(false)
    console.log ('ListView rendered')
    const handleClick = (props) => {
        console.log ('ListView handleClick rendered')
        console.log(props.a)
        setSN(props.a)
        setClick(true)
    }
    return (
        <div>
            {foundCountry.map((a, i) =>
            <div key = {i}>
                {a} <button onClick={() => handleClick({a})}>show</button>
            </div>)}
            <div>
            {click? <CountryView countryName = {sn} countries = {countries} />
                    :  null}
            </div>
        </div>
    )
}

export default ListView
