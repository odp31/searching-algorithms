// time complexity; O(n)
// space complexity: O(1)

public class LinearSearch
  {
    public static int linearSearch(int[] arr, int x)
    {
      int n = arr.length;
      for (int i = 0; i < n; i++)
        {
          if (arr[i] == x)
          {
            return i;
          }
        }
      return -1;
    }
  }
