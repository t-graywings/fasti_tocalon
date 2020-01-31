const axios = () =>{
  const axios = require('axios');
  return axios.create({
    baseUrl: location.host,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export default axios();