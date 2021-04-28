const axios = require('axios')
const regions = ['NAE', 'NAW', 'EU', 'OCE', 'BR', 'ASIA', 'ME']

regions.map((region) => {
  axios.post('http://localhost:3000/api/regions', {region: region})
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})