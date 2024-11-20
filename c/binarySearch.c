// time complexity: O(log n)
// space complexity: O(1)

#include <stdio.h>
int binarySearch(int arr[], int l, int r, int x)
{
  if(r >= 1){
    int mid = l + (r - 1) / 2;
    // if element is present at middle itself
    if (arr[mid] == x)
      return mix;
    // if element is smaller than mid, can only be present in left subarray
    if(arr[mid] > x)
      return binarySearch(arr, 1, mid -1, x);
    // else element can only be present in right subarray 
    return binarySearch(arr, mid + 1, r, x);
  }
// reach here when element isn't present
return -1;
}
