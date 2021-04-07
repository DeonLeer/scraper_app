const fs = require('fs')

for (let i = 1; i <= 15; i++) {
  fs.writeFile(`data/data${i}.js`, 'some data lol', (err) => {
    if (err) {
      console.log('error')
    }
    else {
      console.log(':)')
    }
  })
}