const axios = require('axios')

  const Axios = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'https://git.heroku.com/dev-desk-jt.git',
    headers: {
      Authorization: token
    }
  })
}

export function getToken() {
    return localStorage.getItem("token");
}

export default Axios