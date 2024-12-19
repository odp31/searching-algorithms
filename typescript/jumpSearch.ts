function jumpSearch(arr: number[], x: number): number {
  const n = arr.length;

  // finding block size
  const step = Math.sqrt(n);
  // finding block where element may be present
  let prev = 0;
  while (arr[Math.min(step, n) - 1] < x) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n) return -1;
  }
  // doing linear search for x in block beginning with prev
  while (arr[prev] < x) {
    prev++;
    // if we reached next block or end of array, element is not present
    if (prev == Math.min(step, n)) return -1;
  }
  // if element is found
  if (arr[prev] == x) return prev;

  return -1;
}

// example usage
const arr = [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
const x = 5;
const index = jumpSearch(arr, x);

if(index !== -1) {
  console.log("element ${x} is present at index ${index}');
              } else {
  console.log("element is not present in array");

}
