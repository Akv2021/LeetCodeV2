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
var isValidBST = function(root) {
    let inorderTraversal = function(root) {
        let stack = [];  // Stack for iterative traversal
        let ans = [];
        let node = root;
        
        while (true) {
            if (node) {
                stack.push(node);
                node = node.left;
            } else {
                if (!stack.length) return ans;  // If stack is empty, traversal is done
                node = stack.pop();
                ans.push(node.val);
                node = node.right;
            }
        }
    };

    let inorderArray = inorderTraversal(root);

    // Check if the inorder traversal array is sorted in strictly increasing order
    for (let i = 1; i < inorderArray.length; i++) {
        if (inorderArray[i] <= inorderArray[i - 1]) {
            return false;  // If any element is not strictly greater than the previous one, return false
        }
    }

    return true;  // If all values are in increasing order, return true
};