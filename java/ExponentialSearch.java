public class ExponentialSearch {
  public static int exponentialSearch(int[] arr, int n, int x) {
    // if x is present at first index
    if(arr[0] == x)
      return 0;
    // find range for binary search by repeated doubling
    int i = 1;
    while(i < n && arr[i] <= x)
      i = i * 2;
    // call binary search for found range
    return binarySearch(arr, i / 2, min(i, n - 1), x);
  }

// binary search
  public static int binarySearch(int[] arr, int l, int r, int x) {
    if (r >= 1) {
      int mid = l + (r - 1) / 2;
      if(arr[mid] == x)
        return mid;
      if(arr[mid] > x)
        return binarySearch(arr, l, mid - 1, x);
      return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
  }
  public static int min(int x, int y) {
    return (x < y) ? x : y;
  }
  public static void main(String args[]) {
    int arr[] = {2, 3, 4, 10, 40};
    int x = 10;
    int result= exponentialSearch(arr, arr.length, x);
    if(result == -1)
      System.out.println("element is not present in array");
    else
      System.out.println("element is present at index " + result);
  }
}
