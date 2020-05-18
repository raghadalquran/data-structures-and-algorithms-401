'use strict';
let arrNum = [2, 4, 6, 8];
let numVl = 5;


function insertShiftArray(arr, val) {
  let newArr = [];
  newArr.length = arr.length + 1;
  const midPoint = Math.ceil(arr.length / 2);
  for (let i = 0; i < midPoint; i++) {
    newArr[i] = arr[i];
  }
  newArr[midPoint] = val;
  for (let i = midPoint + 1; i < newArr.length; i++) {
    newArr[i] = arr[i - 1];
  }

  return newArr;
}
insertShiftArray(arrNum, numVl)
