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
var diameterOfBinaryTree = function(root) {
    let maxDia = 0;
    function dfs(root){
        if(!root) return 0;
        let leftDepth = dfs(root.left);
        let rightDepth = dfs(root.right);
        maxDia = Math.max(maxDia, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    dfs(root);
    return maxDia;
};