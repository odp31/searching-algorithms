# time complexity: O(n)
# space complexity: O(1)

def linear_search(arr, x):
  for i in range(len(arr)):
    if arr[i] == x:
      return i
  return -1
  
