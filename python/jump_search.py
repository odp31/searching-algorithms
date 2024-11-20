# time complexity: O(sqrt(N))
# space complexity: O(1)

def jump_search(arr, x):
	n = len(arr)
	step = int(math.sqrt(n))

	# find block where elmeent may be present
	prev = 0
	while arr[min(step, n) - 1] < x:
		prev = step
		step += int(math.sqrt(n))
		if prev >= n:
			return -1

	# do a linear search in the block found above
	while arr[prev] < x:
		prev += 1

	# if we reached next block or end of array, element is not present
	if prev == min(step, n) and arr[prev] != x:
		return -1

	# if element is found
	if arr[prev] == x:
		return prev

return -1 
