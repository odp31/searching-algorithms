public class InterpolationSearch {
  public static int interpolationSearch(int[] arr, int lo, int hi, int x) {
    if(lo <= hi && x >= arr[lo] && x <= arr[hi]) {
      // find position of x using interpolation search formula
      int pos = lo + (((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));
      if(arr[pos] == x)
        return pos;
      if(arr[pos] < x)
        return interpolationSearch(arr, pos + 1, hi, x);
      if(arr[pos] > x)
        return interpolationSearch(arr, lo, pos - 1, x);
    }
    return -1;
  }
  public static void main(String args[]) {
    int arr[] = {10, 12, 13, 15, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47};
    int n = arr.length;
    int x = 20;
    int index = interpolationSearch(arr, 0, n - 1, x);

    if(index != -1)
      System.out.println("index of " + x + " is " + index);
    else
      System.out.println(x + " isn't present in array");
  }
}
