// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  const res = [];
  max = Math.max(...arr1);
  min = Math.min(...arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < min) {
      res[1] = true;
      res[0] = false;
      break;
    } else if (arr2[i] > max) {
      res[0] = true;
    }
  }
  return res
}

console.log(result(arr1, arr2));
