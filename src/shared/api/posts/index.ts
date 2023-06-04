import Axios from 'axios'

const posts = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default posts
