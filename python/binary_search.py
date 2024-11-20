# time complexity; O(log n)
# space complexity; O(1)

def binary_search(arr, x):
  low = 0
  high = len(arr) - 1
  mid = 0

  while low <= high:
    mid = (high + low) // 2

    #if x is greater, ignore left half
    if arr[mid] < x:
      low = mid + 1
    # if x is smaller, ignore right half
    elif arr[mid] > x:
      high = mid - 1
    else: #otherwise, element is present at mid 
      return mid
  return -1 # if we reach here, element wasn't present 
