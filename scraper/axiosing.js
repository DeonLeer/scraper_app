const axios = require('axios')

axios.get('https://fortnitetracker.com/events/epicgames_S15_FNCS_GrandFinals_NAE')
  .then(function(response) {
    console.log(response)
  })