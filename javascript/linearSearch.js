// time: O(n) worst case, O(1) best case
// space: O(1)

function linearSearch(arr, target)
{
  for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] === target)
      {
        return i;
      }
    }
  return -1; // not found
}
