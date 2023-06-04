import Axios from 'axios'

const posts = Axios.create({
  baseURL: process.env.REACT_APP_JSON_PLACEHOLDER + '/posts',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default posts
