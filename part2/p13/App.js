import { useState, useEffect } from "react"
import axios from "axios"
import Search from './components/Search'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [foundCountry, setFoundCountry] = useState([])

  const hook = () => {
    console.log('hook effect is triggered to get data for all countries ')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])
  const listOfCountries = countries.map (c => (c).name.common)
  console.log('App comp: after search', foundCountry)
  return (
    <div>
      <h3>Countries </h3>
      <Search listOfCountries = {listOfCountries} setFoundCountry = {setFoundCountry} />
      <CountryList foundCountry = {foundCountry} countries = {countries} />
      
    </div>
  )
}
export default App
