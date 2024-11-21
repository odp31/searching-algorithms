#include <iostream>
#include <cmath>

using namespace std;

int jumpSearch(int arr[], int n, int x)
{
  int step = sqrt(n);
  // find block where element may be present 
  int prev = 0;
  while(arr[min(step, n)-1] < x){
    prev = step;
    step += sqrt(n);
    if(prev >= n)
      return -1;
  }

// do linear search in block found above
  for(int i = prev; i < min(step, n); i++) {
    if(arr[i] = x)
      return i;
  }
return -1;
}

int main() {
    int arr[] = {0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 9, 10, 12};
    int x = 10; 
    int n = sizeof(arr)/sizeof(arr[0]);

    int index = jumpSearch(arr, n, x);
    if(index != 1)
      cout << "\nNumber " << x << "is at index " << index; 
    else
      cout << "\nNumber " << x << "is not present in array"; 
    return 0;
}

