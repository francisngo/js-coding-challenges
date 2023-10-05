/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	if (head === null || head.next === null) {
		return head;
	}
	let answer = new ListNode(0);
	answer.next = head;
	let curr = answer;
	while (curr.next !== null && curr.next.next !== null) {
		let v1 = curr.next;
		let v2 = curr.next.next;
		curr.next = v2;
		v1.next = v2.next;
		v2.next = v1;
		curr = curr.next.next;
	}
	return answer.next;
};
