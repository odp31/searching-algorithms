class ExponentialSearch {
  public exponentialSearch(arr: number[], target: number): number {
    if(arr[0] === target) {
      return 0;
    }
    let bound = 1;
    while(bound < arr.length && arr[bound] <= target) {
      bound *= 2;
    }
    return this.binarySearch(arr, bound / 2, Math.min(bound, arr.length - 1), target);
  }

  private binarySearch(arr: number[], left: number, right: number, target: number): number {
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
