def exponential_search(arr, n, x):
  """
  performs search on a sorted array
  arr: sorted array
  n: size of array
  x: element to be searched
  returns:
  index of element if found else -1
  """
  if arr[0] == x:
    return 0

  i = 1
  while i < n and arr[i] <= x:
    i = i * 2
  return binary_search(arr, i // 2, min(i, n - 1), x)


def binary_search(arr, left, right, x):
  if right >= left:
    mid = left + (right - left) // 2
    if arr[mid] == x:
      return mid
    if arr[mid] > x:
      return binary_search(arr, left, mid - 1, x)
    return binary_search(arr, mid + 1, right, x)
  return -1

# example usage
arr = [2, 3, 4, 10, 40]
x = 10
result = exponential_search(arr, len(arr), x)
if result == -1:
  print("element is not present in array")
else:
  print("element is not present at index", str(result))
