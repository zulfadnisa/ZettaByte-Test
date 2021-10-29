// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  let binary = num.toString(2).split('')
  let sum = 0
  binary.forEach(el => {
    sum = sum + Number(el)
  });
  return sum
}

console.log(result(number));