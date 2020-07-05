const axios = require('axios')

  const Axios = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'https://dev-desk-jt.herokuapp.com/',
    headers: {
      Authorization: token
    }
  })
}

export function getToken() {
    return localStorage.getItem("token");
}

export default Axios