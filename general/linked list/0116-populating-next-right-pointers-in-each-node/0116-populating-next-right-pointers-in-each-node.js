/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
// LevelWise with one loop
// var connect = function(root) {
//     if(!root) return root;

//     let q = [root], size = 1;
//     while(q.length){
//         let node = q.shift();
//         size--;
//         if(node.left) q.push(node.left);
//         if(node.right) q.push(node.right);
//         if(size != 0){
//             node.next = q[0];
//         } else {
//             size = q.length;
//             // node.next = null;
//         }
//     }
//     return root;
// };

// Levelwise with two loops
// var connect = function(root) {
//     if (!root) return null;

//     let queue = [root];

//     while (queue.length > 0) {
//         let levelSize = queue.length;

//         for (let i = 0; i < levelSize; i++) {
//             let node = queue.shift();
            
//             if (i < levelSize - 1) {
//                 node.next = queue[0];
//             }

//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//     }

//     return root;
// };

// Iterative - Keep connecting children
var connect = function(root) {
    if (!root) return null;

    let leftmost = root;

    // Traverse level by level
    while (leftmost.left) {
        let current = leftmost;

        // Traverse nodes in the current level
        while (current) {
            // Connect the left child to the right child
            current.left.next = current.right;

            // If there is a next node, connect the right child to the next left child
            if (current.next) {
                current.right.next = current.next.left;
            }

            // Move to the next node in the current level
            current = current.next;
        }

        // Move to the next level
        leftmost = leftmost.left;
    }

    return root;
};