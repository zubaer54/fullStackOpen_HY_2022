import { useState, useEffect } from "react"
import axios from "axios"
import CountryView from './components/CountryView'
import NewCountryView from './components/NewCountryView'

const Search = (props) => {
  const ached = (e) => {
    console.log(e.target.value)
    const keyw = e.target.value
    const filterItems = (arr, que) => {
      return arr.filter(el => el.toLowerCase().indexOf(que.toLowerCase()) !== -1)
    }
    props.setFoCount(filterItems(props.listOfCountries, keyw))
  }
  return (
    <form>
      <div>
        find countries: <input
            onChange = {ached}/>
      </div>
    </form>
  )
}

const CountryList = (props) => {
  const [click, setClick] = useState(false)
  const [paisiCountry, setPaisiCountry] = useState('')
  const foCountLength = props.foCount.length
  console.log('CountryList comp: number of matches', foCountLength)
  console.log('CountryList comp: found countries', props.foCount)

 if (foCountLength > 10) {
   return (
     <div>
       Too many matches, specify another filter
     </div>
   )
 }
 else if (foCountLength <= 10 && foCountLength !== 1) {
   const handleClick = (props) => {
     console.log('button clikced')
     console.log(props.c)
     setClick(true)
     setPaisiCountry(props.c)
   }
   return (
     <div>
       {props.foCount.map((c, index) =>
        <div key = {index}>
          {c} <button onClick={() => handleClick({c})}>show</button>
        </div>)}
        <div>{click? <NewCountryView countryName = {paisiCountry} countries = {props.countries} setPaisiCountry = {setPaisiCountry}/> : null}</div>
     </div>
   )
 }
 else if (foCountLength == 1) {
   const countryName= props.foCount[0]
   return (
     <CountryView countryName = {countryName} countries = {props.countries}/>
   )
 }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [foCount, setFoCount] = useState([])

  const hook = () => {
    console.log('hook effect is triggered')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('App comp: hook:', 'promise fulfilled from rest countries API')
        setCountries(response.data)
      })
  }
  console.log('App comp:', 'render', countries.length, 'countries')
  useEffect(hook, [])
  const listOfCountries = countries.map (c => (c).name.common)
  console.log('App comp:', 'List of countries', countries)

  return (
    <div>
      <h3>Countries </h3>
      <Search listOfCountries = {listOfCountries} setFoCount = {setFoCount} />
      <CountryList foCount = {foCount} countries = {countries} />
    </div>
  )
}

export default App
// countries is an array containing 250 objects. these object attributes are captured using (countries).propertyName.propertyName
