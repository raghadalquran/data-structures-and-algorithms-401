'use strict';

function binarySearch(arr, target, firstIndex = 0, lastIndex = arr.length - 1) {

  const midpointIndex = Math.ceil((firstIndex + lastIndex) / 2);
  const midpoint = arr[midpointIndex];

  if (target === midpoint) return `The index of ${midpoint} is ${midpointIndex}`;
  if (firstIndex > lastIndex) return 'couldnt find it';
  if (target < arr[firstIndex] || target > arr[lastIndex]) return 'negative one';
  if (target < midpoint) {
    lastIndex = midpointIndex;
    return binarySearch(arr, target, firstIndex, lastIndex);
  }
  if (target > midpoint) {
    firstIndex = midpointIndex;
    return binarySearch(arr, target, firstIndex, lastIndex);
  }
}
let array = [11, 22, 33, 44, 55, 66, 77];
let numTarget = 77;
binarySearch(array, numTarget);
