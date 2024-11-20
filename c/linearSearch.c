// time complexity: O(n)
// space complexity: O(1)

#include <stdio.h>
int linearSearch(int arr[], int n, int x)
{
  for(int i = 0; i < n; i++)
    if (arr[i] == x)
      return i;
  return -1;
}
