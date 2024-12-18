class InterpolationSearch {
  public interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high && target >= arr[low] && target <= arr[high]) {
      // approximate position of target
      let pos = low + (((high - low) / (arr[high] - arr[low])) * (target - arr[low]));
      if(arr[pos] == target) {
        return pos;
      }
      if(arr[pos] < target) {
        low = pos + 1;
      } else {
        high = pow - 1;
      }
    }
    return -1;
  }
}
