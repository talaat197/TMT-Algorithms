const isNumber = (num) => {
  return !isNaN(num)
}
const isLowerCase = (letter) => {
  return letter.toLowerCase() === letter;
}
const isUpperCase = (letter) => {
  return letter.toUpperCase() === letter;
}
const isSpecialCharacter = (letter) => {
  const SPECIAL_CHARACTERS = "!@#$%^&*()-+"
  return SPECIAL_CHARACTERS.includes(letter);
}
const isLetter = (letter) => {
  if((letter.codePointAt(0) >= 'A'.codePointAt(0) && letter.codePointAt(0) <= 'Z'.codePointAt(0)) 
  || (letter.codePointAt(0) >= 'a'.codePointAt(0) && letter.codePointAt(0) <= 'z'.codePointAt(0)))
  {
    return true;
  }
  return false
}
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let foundNumber = 1, foundLower = 1, foundUpper = 1, foundSpecial = 1;
  
  for(let letter of password) {
      if(foundNumber) foundNumber = isNumber(letter) ? 0 : 1
      if(foundLower) foundLower = isLowerCase(letter) ? 0 : 1
      if(foundUpper) foundUpper = isUpperCase(letter) ? 0 : 1
      if(foundSpecial) foundSpecial = isSpecialCharacter(letter) ? 0 : 1
  }
  let needCharacter = foundLower + foundNumber + foundUpper + foundSpecial
  console.log({needCharacter, foundLower, foundNumber, foundUpper, foundSpecial}, Math.abs(n - 6))
  needCharacter = n - 6 >= 0 ? needCharacter : Math.max(6 - n, needCharacter)
  
  return needCharacter
}

console.log(minimumNumber(3, '123'))