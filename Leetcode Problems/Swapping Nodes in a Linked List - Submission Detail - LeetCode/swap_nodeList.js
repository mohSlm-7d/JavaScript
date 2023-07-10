/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let p = head;
    const map = new Map();
    let key=1;
    while(p!==null){
        map.set(key, p);
        key++;
        p=p.next;
    }

    let size = map.size;
    let k_from_t = map.get(size - (k-1));
    let k_from_h = map.get(k);

    let temp = k_from_h.val;
    k_from_h.val = k_from_t.val;
    k_from_t.val = temp;

    return head; 

};