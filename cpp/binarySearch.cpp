#include <iostream>

using namespace std;

int binarySearch(int arr[], int left, int right, int target)
{
  while(left <= right){
    int mid = left + (right - left) / 2;
    if(arr[mid]== target)
      return mid; // target found
    else if(arr[mid] < target) 
      left = mid+1;
    else
      right = mid - 1;
  }
return -1; 
}

int main()
{
  int arr[] = {2, 5, , 12, 16, 23,38, 56, 72, 91};
  int target = 23;
  int n = sizeof(arr) / sizeof(arr[0]);

  int result = binarySearch(arr, 0, n - 1, target);
  if(result == -1)
    cout << "element not found" << end1;
  else
    cout << "element found at index" << result << end1;

  return 0;
}
