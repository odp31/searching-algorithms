function exponentialSearch(arr, x) {
  if(arr[0] == x) {
    return 0;
  }
  // find range for binary search by repeated doubling
  let i = 1;
  while(i < arr.length && arr[i] <= x) {
    i *= 2;
  }
  // call binary search for found range
  return binarySearch(arr, i / 2, Math.min(i, arr.length - 1), x);
}

function binarySearch(arr, left, right, x) {
  if(right >= left) {
    let mid = left + Math.floor((right - left) / 2);
    // if element is present at middle itself
    if(arr[mid] === x) {
      return mid;
    }
    if(arr[mid] > x) {
      return binarySearch(arr, left, mid - 1, x);
    }
    return binarySearch(arr, mid + 1, right, x);
  }
  return -1;
}

// example usage
const arr = [2, 4, 5, 10, 40];
const x = 10;
const result = expnentialSearch(arr, x);

if(result === -1) {
  console.log("element is not present in array");
} else {
  console.log("element is present at index " + result);
}
