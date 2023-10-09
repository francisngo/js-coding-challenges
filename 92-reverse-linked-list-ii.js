/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
*/

var reverseBetween = function (head, left, right) {
	if (!head || left === right) return head;

	const dummy = new ListNode(0);
	dummy.next = head;
	let prev = dummy;

	for (let i = 0; i < left - 1; ++i) {
		prev = prev.next;
	}

	let current = prev.next;

	for (let i = 0; i < right - left; ++i) {
		const nextNode = current.next;
		current.next = nextNode.next;
		nextNode.next = prev.next;
		prev.next = nextNode;
	}

	return dummy.next;
};
