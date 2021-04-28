const axios = require('axios')
const seasons = [12, 13, 14, 15]

seasons.map((season) => {
  axios.post('http://localhost:3000/api/seasons', {season: season})
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})