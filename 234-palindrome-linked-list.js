/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

var isPalindrome = function (head) {
	let slow = head;
	let fast = head;
	let prev;
	let temp;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	prev = slow;
	slow = slow.next;
	prev.next = null;

	while (slow) {
		temp = slow.next;
		slow.next = prev;
		prev = slow;
		slow = temp;
	}

	fast = head;
	slow = prev;

	while (slow) {
		if (fast.val !== slow.val) {
			return false;
		} else {
			fast = fast.next;
			slow = slow.next;
		}
	}

	return true;
};
