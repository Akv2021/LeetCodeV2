/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root.val == p.val || root.val == q.val){
        return root;
    }

    let smaller = Math.min(p.val, q.val);
    let larger = Math.max(p.val, q.val);

    if(smaller > root.val){
        root = root.right;
    } else if (larger < root.val){
        root = root.left;
    } else {
        return root;
    }

    return lowestCommonAncestor(root, p, q);
};