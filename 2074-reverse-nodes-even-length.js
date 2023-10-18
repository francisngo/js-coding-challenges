/*
You are given the head of a linked list.

The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers (1, 2, 3, 4, ...). The length of a group is the number of nodes assigned to it. In other words,

The 1st node is assigned to the first group.
The 2nd and the 3rd nodes are assigned to the second group.
The 4th, 5th, and 6th nodes are assigned to the third group, and so on.
Note that the length of the last group may be less than or equal to 1 + the length of the second to last group.

Reverse the nodes in each group with an even length, and return the head of the modified linked list.

Example 1:
Input: head = [5,2,6,3,9,1,7,3,8,4]
Output: [5,6,2,3,9,1,4,8,3,7]
Explanation:
- The length of the first group is 1, which is odd, hence no reversal occurs.
- The length of the second group is 2, which is even, hence the nodes are reversed.
- The length of the third group is 3, which is odd, hence no reversal occurs.
- The length of the last group is 4, which is even, hence the nodes are reversed.

Example 2:
Input: head = [1,1,0,6]
Output: [1,0,1,6]
Explanation:
- The length of the first group is 1. No reversal occurs.
- The length of the second group is 2. The nodes are reversed.
- The length of the last group is 1. No reversal occurs.

Example 3:
Input: head = [1,1,0,6,5]
Output: [1,0,1,5,6]
Explanation:
- The length of the first group is 1. No reversal occurs.
- The length of the second group is 2. The nodes are reversed.
- The length of the last group is 2. The nodes are reversed.
*/

var reverseEvenLengthGroups = function (head) {
	let groupSize = 2;

	let start = head;

	let prev = head;
	let curr = head.next;

	let count = 0;

	while (curr != null) {
		if (count === groupSize) {
			if (groupSize % 2 === 0) {
				// we only reverse when it is even
				const end = curr;
				const tail = start.next; // the starting node of the reverse linked list will be the tail after the reverse takes place
				reverseList(start, end, count); // we need to reverse everything in the middle of start and end
				start = tail; // we set the new start to the end of the reversed linked list
			} else {
				// when groupSize is even we don't need to reverse, but need to set the new start to the prev node
				start = prev;
			}
			count = 0; // whenever we reached the group size we need to reset our count and up our groupSize
			++groupSize;
		} else {
			// just a normal traversal when we haven't hit our groupSize
			prev = curr;
			curr = curr.next;
			++count;
		}
	}

	if (count % 2 === 0) {
		// in the case where we ended early on even count
		reverseList(start, null, count);
	}

	return head;

	function reverseList(start, end, count) {
		if (start.next == null) return start; // for case when we have a single node

		let prev = start;

		let curr = start.next;
		let tail = start.next;

		for (let i = 0; i < count; ++i) {
			const next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		start.next = prev;
		tail.next = end;

		return;
	}
};
