const axios = require('axios')
        const elims = []
        elims.map((elim) => {
          axios.post('http://localhost:3000/api/eliminationsnofeed', {elim})
          .then(function(response) {
            console.log(response)
          })
          .catch((err) => {
            console.log(err)
          })
        })
        