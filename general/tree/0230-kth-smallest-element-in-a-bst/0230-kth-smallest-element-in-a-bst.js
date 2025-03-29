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
 * @param {number} k
 * @return {number}
 */
// Optimal - Without early stopping. Return ans
// var kthSmallest = function(root, k) {
// let ans;
//    function inorder(root){
//         if(!root) return root;

//         inorder(root.left);
//         k--;
//         if(k == 0){
//             ans = root.val;
//         }
//         inorder(root.right);
//     }
//     inorder(root);
//     return ans;

// };

// ALternative - With correct early return without global var
// var kthSmallest = function(root, k) {
//     function inorder(node) {
//         if (!node) return null;

//         let left = inorder(node.left);
//         if (left !== null) return left; // If left call found the answer, return it

//         k--; 
//         if (k === 0) return node.val; // Found the kth smallest element
        
//         return inorder(node.right); // Continue to right subtree
//     }
    
//     return inorder(root);
// };

// Optimal & simple - Early return with global var
var kthSmallest = function(root, k) {
let ans = null;
   function inorder(root){
        if(!root || ans != null)    // Stop already scheduled calls if ans is found
            return root;

        inorder(root.left);
        k--;
        if(k == 0){
            ans = root.val;
            return;     // Stop further calls
        }
        inorder(root.right);
    }
    inorder(root);
    return ans;

};