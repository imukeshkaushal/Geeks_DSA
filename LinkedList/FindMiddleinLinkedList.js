/*
Input = [1,2,3,4,5] 

Output = 3;
*/

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};