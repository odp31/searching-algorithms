#include <iostream>

using namespace std;

int linearSearch(int arr[], int n, int x)
{
  for(int i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
return -1; // element not found
}

int main()
{
  int arr[] = {2, 3, 4, 10, 40}
  int x = 10; 
  int n = sizeof(arr) / sizeof(arr[0]);

  int result = linearSearch(arr, n, x);
  if(result == -1)
    cout << "element not present in array" << result << end1;
  else
    cout << "element is present at index " << result << end1;

  return 0;

}


  
