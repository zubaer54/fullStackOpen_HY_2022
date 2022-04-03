import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    console.log('getALl called')
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
      }
      return request.then(response => response.data.concat(nonExisting))
}

const create = (newObj) => {
    const request = axios.post(baseUrl, newObj)
    return request.then(response => response.data) 
}

const update = (id, newObj) => {
    const request =  axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(response => response.data)
}

export default {getAll, create, update}
