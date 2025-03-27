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
var isSymmetric = function(root) {
    if(!root) return true;
    function helper(p,q){
        if(!p && !q) return true;
        if(!p || !q || (p.val !== q.val)) return false;

        return helper(p.left, q.right) && helper(p.right, q.left);
    }
    return helper(root.left, root.right);
};