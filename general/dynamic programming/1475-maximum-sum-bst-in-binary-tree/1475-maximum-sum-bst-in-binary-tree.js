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
 * @return {number}
 */

// Optimal solution - return sum in postorder manner and update global sum
function maxSumBST(root) {
    let maxSum = 0;
    
    function dfs(node) {
        if (!node) return [0, Infinity, -Infinity];
        
        let [lsum, lmin, lmax] = dfs(node.left);
        let [rsum, rmin, rmax] = dfs(node.right);
        
        if (lmax < node.val && node.val < rmin) {
            let sum = node.val + lsum + rsum;
            maxSum = Math.max(maxSum, sum);
            return [sum, Math.min(lmin, node.val), Math.max(rmax, node.val)];
        } else {
            return [0, -Infinity, Infinity];
        }
    }
    
    dfs(root);
    return maxSum;
}


// Brute - TLE exceeds
// function maxSumBST(root) {
//     let maxSum = 0;
    
//     function isBST(node, min, max) {
//         if (!node) return true;
//         if (node.val <= min || node.val >= max) return false;
//         return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
//     }
    
//     function sumBST(node) {
//         if (!node) return 0;
//         return node.val + sumBST(node.left) + sumBST(node.right);
//     }
    
//     function dfs(node) {
//         if (!node) return;
//         if (isBST(node, -Infinity, Infinity)) {
//             maxSum = Math.max(maxSum, sumBST(node));
//         }
//         dfs(node.left);
//         dfs(node.right);
//     }
    
//     dfs(root);
//     return maxSum;
// }
    