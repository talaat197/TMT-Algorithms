/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
  let result = "NO"
  let firstValue = ""
  for(let i =1; i <= parseInt(s.length/2); i++) {
      let value = parseInt(s.substring(0,i))
      firstValue = value
     
      let test = value.toString()
      while(test.length < s.length){
        if(i ===  parseInt(s.length/2)) {
          console.log({v:(parseInt('9007199254740993'))})
        }
        value++
        if(i ===  parseInt(s.length/2)) {
          console.log({test, value})
  
        }
        test = test.concat(value.toString())
      }
      if(test === s) {
          result = "YES"
          break;
      }
  }
  
  console.log(result === "NO" ? result : `${result} ${firstValue}`)
}

separateNumbers("90071992547409929007199254740993")

console.log(BigInt(9007199254740992) === BigInt(9007199254740993))