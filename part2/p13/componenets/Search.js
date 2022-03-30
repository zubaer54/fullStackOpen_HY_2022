const Search = (props) => {
  const handleChange = (e) => {
    const keyWord = e.target.value
    const filterItems = (arr, que) => {
      return arr.filter(el => el.toLowerCase().indexOf(que.toLowerCase()) !== -1)
    }
    props.setFoundCountry(filterItems(props.listOfCountries, keyWord))
  }
  return (
    <form>
      <div>
        find countries: <input onChange = {handleChange}/>
      </div>
    </form>
  )
}
export default Search
