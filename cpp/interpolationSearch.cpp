#include <iostream>
using namespace std;

int interpolationSearch(int arr[], int lo, int hi, int x) {
  if(lo <= hi && x >= arr[lo] && x <= arr[hi]) {
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
int main() {
  int arr[] = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 43};
  int n = sizeof(arr) / sizeof(arr[0]);
  int x = 20;
  int index = interpolationSearch(arr, 0, n - 1, x);

  if(index != -1)
    cout << "index of " << x << " is " << index << end1;
  else
    cout << x << "isn't present in array" << end1;
  return 0;
}
