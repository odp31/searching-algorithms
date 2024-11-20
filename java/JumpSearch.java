// time complexity; O(sqrt(n))
// space complexity; O(1)

public class JumpSearch
  {
    public static int jumpSearch(int arr[], int x)
    {
      int n = arr.length;
      // find block size to be jumped
      int step = (int)Math.floor(Math.sqrt(n));
      // find block where element may be present
      int prev = 0;
      while (arr[Math.min(step, n)-1] < x)
        {
          prev = step;
          step += (int)Math.floor(Math.sqrt(n));
          if (prev >= n)
            return -1;
        }
      // do linear search in block found above
      while (arr[prev] < x)
        {
          prev++;
          if(prev == Math.min(step, n))
            return -1;
        }
      // if element is found
      if (arr[prev] == x)
        return prev;
      return -1;
    }
  }
