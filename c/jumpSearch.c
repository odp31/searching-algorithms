// time complexity; O(sqrt(n))
// space complexity: O(1)

#include <stdio.h>
#include <math.h>

int jumpSeach(int arr[], int x, int n)
{
  int step = sqrt(n);
  // find block where element may be present
  int prev = 0;
  while(arr[min(step,n) - 1] < x) {
    prev = step;
    step += sqrt(n);
    if (prev >= n)
      return -1;
  }
  // do linear search on block found above
  while (arr[prev] < x) {
    prev++;
    if(prev == min(step, n))
      return -1;
  }
  // if element is found
  if (arr[prev] == x)
    return prev;
  return -1;
}
