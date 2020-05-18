'use strict';

function reverseArray (arr){
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let element = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = element;
  }
  return arr;
}

let revArr = [1, 2, 3, 4, 5, 6];
reverseArray(revArr);
