#include <stdio.h>

int exponentialSearch(int arr[], int n, int x) {
  if(arr[0] == x)
    return 0;
  int i = 1;
  while(i < n && arr[i] <= x)
    i = i * 2;
  return binarySearch(arr, i/2, min(i, n - 1), x);
}

int binarySearch(int arr[], int l, int r, int x) {
  if(r >= 1) {
    int mid = l + (r - l) / 2;
    if(arr[mid] == x)
      return mid;
    if(arr[mid] > x)
      return binarySearch(arr, l, mid -1, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}

int min(int x, int y) {
  return (x < y) ? x : y;
}

int main(void) {
  int arr[] = {2, 3, 4, 10, 40};
  int x = 10;
  int result = exponentialSearch(arr, sizeof(arr) / sizeof(arr[0]), x);
  if(result == -1)
    printf("element is not present in array \n");
  else
    printf("element is at index %d", result);
  return 0;
}
