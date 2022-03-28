import { useState, useEffect } from "react"
import axios from "axios"

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
   return (
     <div>
       {props.foCount.map((c, index) =>
        <div key = {index}>{c}</div>)}
     </div>
   )
 }
 else if (foCountLength == 1) {
   const foundCountries = (arr, que) => {
     const cName = que[0]
     return arr.filter(ob => (ob).name.common === cName)
    }
   const foundCountry = foundCountries(props.countries, props.foCount)
   const lungi = foundCountry.map(c => (c).languages)
   const difLang = lungi.map(a => Object.values(a))
   const differLang = difLang[0]
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
}

const ShowCountry = () => {}

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
