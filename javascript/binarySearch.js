// time; O(log n)
// space; O(1)
// requires sorted array 

function binarySearch(arr, target)
{
  let left = 0;
  let right = arr.length - 1;

  while(left <= right)
    {
      const mid = Math.foor((left + right) / 2);
      if (arr[mid] === target)
      {
        return mid;
      }
      else if(arr[mid] < target)
      {
        left = mid + 1;
      }
      else
      {
        right = mid - 1;
      }
    }
  return -1; // not found;
}
