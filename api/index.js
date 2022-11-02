import axios from 'axios'
const instance = axios.create({
  // baseURL: process.env.BASE_URL,

  baseURL: process.env.BASE_URL,
})

function fetchTest() {
  console.log()
  return instance
}

export default { fetchTest }
