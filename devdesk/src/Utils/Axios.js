const axios = require('axios')

  const Axios = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
      Authorization: token
    }
  })
}

export function getToken() {
    return localStorage.getItem("token");
}

export default Axios