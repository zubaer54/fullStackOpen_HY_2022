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
 if (props.foCount.length > 10) {
   return (
     <div>
       Too many matches, specify another filter
     </div>
   )
 }
 else {
   return (
     <div>
       {props.foCount.map((c, index) =>
        <div key = {index}>{c}</div>)}
     </div>
   )
 }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [foCount, setFoCount] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  console.log('render', countries.length, 'countries')
  useEffect(hook, [])
  const listOfCountries = countries.map (c => (c).name.common)
  console.log(listOfCountries)

  return (
    <div>
      <h3>Countries </h3>
      <Search listOfCountries = {listOfCountries} setFoCount = {setFoCount} />
      <CountryList foCount = {foCount} />
    </div>
  )
}

export default App
