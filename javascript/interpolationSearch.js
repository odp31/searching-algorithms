function interpolationSearch(arr, x) {
  let lo = 0;
  let hi = arr.length - 1;

  while(lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    let pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));
    if(arr[pos] === x) {
      return pos;
    } else if (arr[pos] < x) {
      lo = pos + 1;
    } else {
      hi = pos - 1;
    }
  }
  return -1;
}

// example usage
const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
const x = 20;
const result = interpolationSearch(arr, x);

if(result !== -1) {
  console.log("element is present at index " + result);
} else {
  console.log("element is not present in array");
}
