const array1 = newUrlArray.splice(0,100)
const array2 = newUrlArray.splice(0,100)
const array3 = newUrlArray.splice(0,100)
const array4 = newUrlArray.splice(0,100)
const array5 = newUrlArray.splice(0,100)
const array6 = newUrlArray.splice(0,100)
const array7 = newUrlArray.splice(0,100)
const array8 = newUrlArray.splice(0,100)
const array9 = newUrlArray.splice(0,100)
const array10 = newUrlArray.splice(0,100)
const array11 = newUrlArray.splice(0,100)
const array12 = newUrlArray.splice(0,100)
const array13 = newUrlArray.splice(0,100)
const array14 = newUrlArray.splice(0,100)
const array15 = newUrlArray.splice(0,76)

const arrayOfArrays = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12, array13, array14, array15]

let arrayOfPromiseArrays = []
for (let array of arrayOfArrays) {
  let tempArray = array.map((url) => { return axios.get(url) })
}