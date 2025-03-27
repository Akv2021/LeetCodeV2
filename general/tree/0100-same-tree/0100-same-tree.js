/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function treeMatch(root1, root2){   // this method is not required, just created while trying to rename params.
        if(!root1 && !root2){
            return true;
        }
        if((!root1 && root2) || (root1 && !root2)) {
            return false;
        }

        if(root1.val !== root2.val){
            return false;
        }

        return treeMatch(root1.left, root2.left) && treeMatch(root1.right, root2.right);
    }
    return treeMatch(p,q);
};