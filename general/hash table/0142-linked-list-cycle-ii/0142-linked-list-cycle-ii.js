/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            return findCycleStart(slow, head);
        }
    }
    return null;


    function findCycleStart(meet, start){
        while(start != meet){
            meet = meet.next;
            start = start.next;
        }
        return meet;
    }
};