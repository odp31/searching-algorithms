class LinearSearch {
  public linearSearch(arr: number[], target: number): number {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        return i; // target found at index i
      }
    }
    return -1;
  }
}

// example usage
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const search = new LinearSearch();
const index = search.linearSearch(numbers, 23);

if(index !== -1) {
  console.log('target found at index ${index}');
} else {
  console.log('target not found');
}
