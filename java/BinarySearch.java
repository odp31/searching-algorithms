// time complexity; O(log n)
// space complexity; O(1)

public class BinarySearch
  {
    public static int binarySearch(int[] arr, int x)
    {
      int low = 0, high = arr.length - 1;
      while (low <= high)
        {
          int mid = low + (high - low) / 2;
          // check if x is present at mid
          if (arr[mid] == x)
            return mid;
          // if x greater, ignore left half
          if (arr[mid] < x)
            low = mid + 1;
          // if x smaller, ignore right half
          else
            high = mid - 1;
        }
      // if we reach here, element not present
    return -1;
    }
  }
