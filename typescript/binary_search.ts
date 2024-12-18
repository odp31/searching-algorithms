class BinarySearch {
  public binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
      const mid = Math.floor((left + right) / 2);

      if(arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}

// example usage
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const search = new BinarySearch();
const index = search.binarySearch(numbers, 23);

if(index !== -1) {
  console.log('target found at index ${index}');
} else {
  console.log('target not found');
}
