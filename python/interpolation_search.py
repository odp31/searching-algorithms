def interpolation_search(arr, x):
  """
  performs interpolation search on a sorted array
  Args:
  arr: sorted array
  x: element to be searched
  returns:
  index of element if found else -1
  """
  n = len(arr)
  lo = 0
  hi = (n - 1)

  while lo <= hi and x >= arr[lo] and x <= arr[hi]:
    pos = lo + int(((float(hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo])))
    if arr[pos] == x:
      return pos
    if arr[pos] < x:
      lo = pos + 1
    else:
      hi = pos - 1
    return -1

# example usage
arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47]
x = 20

result = interpolation_search(arr, x)
if result == -1:
  print("element is not present in array")
else:
  print("element is present at index", str(result))

