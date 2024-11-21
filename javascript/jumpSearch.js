// particuarly useful when data is sorted and array is large

function jumpSearch(arr, x)
{
  let n = arr.length;
  // find block size
  let step = Math.sqrt(n);

  // find block where element may be present
  let prev = 0;
  while(arr[Math.min(step, n) -1] < x)
    {
      prev = step;
      step += Math.sqrt(n);
      if(prev >= n)
        return -1;
    }
  // do a linear search in block found above
  while(arr[prev] < x)
    {
      prev++;
      if(prev == Math.min(step, n))
        return -1;
    }
  // if element is found
  if(arr[prev] == x)
    return prev;
  return -1;
}

// Example usage:
let arr = [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 12];
let x = 10;

if(index != -1)
  console.log("element " + x + "is present at index " + index);
else
  console.log("element " + x + "is not present in array");

