/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// var isValidBST = function(root){
//     let inorderArr = inorder(root, []);
//     for(let i = 0; i < inorderArr.length - 1; i++){
//         if(inorderArr[i] >= inorderArr[i+1])
//             return false;
//     }
//     return true;
// }

// function inorder(root, ans){
//     if(!root) return ans;
//     inorder(root.left, ans);
//     ans.push(root.val);
//     inorder(root.right, ans);
//     return ans;
// }

// Iterative
// var isValidBST = function(root) {
//     let inorderTraversal = function(root) {
//         let stack = [];  // Stack for iterative traversal
//         let ans = [];
//         let node = root;
        
//         while (true) {
//             if (node) {
//                 stack.push(node);
//                 node = node.left;
//             } else {
//                 if (!stack.length) return ans;  // If stack is empty, traversal is done
//                 node = stack.pop();
//                 ans.push(node.val);
//                 node = node.right;
//             }
//         }
//     };

//     let inorderArray = inorderTraversal(root);

//     // Check if the inorder traversal array is sorted in strictly increasing order
//     for (let i = 1; i < inorderArray.length; i++) {
//         if (inorderArray[i] <= inorderArray[i - 1]) {
//             return false;  // If any element is not strictly greater than the previous one, return false
//         }
//     }

//     return true;  // If all values are in increasing order, return true
// };

// Min max
// var isValidBST = function(root) {
//     function helper(node, min, max) {
//         if (!node) return true;  // If the node is null, it's a valid subtree

//         // The node's value must be within the valid range
//         if (node.val <= min || node.val >= max) return false;

//         // Recursively check the left and right subtrees with updated boundaries
//         return helper(node.left, min, node.val) && helper(node.right, node.val, max);
//     }

//     return helper(root, -Infinity, Infinity);
// };

// Modify iterative with prev
var isValidBST = function(root) {
    let stack = [];
    let prev = null;  // To store the previous node value during the traversal
    let node = root;

    while (true) {
        // Traverse left
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            // If the stack is empty, break
            if (!stack.length) return true;  // If we finish traversing, return true as the tree is valid BST

            // Pop the node from the stack
            node = stack.pop();

            // Validate BST property: The current node value should be greater than the previous node value
            if (prev !== null && node.val <= prev.val) {
                return false;  // If invalid, return false
            }

            // Update prev to the current node value
            prev = node;

            // Traverse right
            node = node.right;
        }
    }
};