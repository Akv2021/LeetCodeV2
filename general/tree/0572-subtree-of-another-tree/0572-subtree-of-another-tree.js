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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root && !subRoot)
        return true;
    
    if(!root || !subRoot){
        return false;
    }

    if(areSameTrees(root, subRoot)) return true;

    // #Gotcha : First check for similarity then at last move to left & right. It is needed since the values and match but we also need to check similarity of complete subtrees. 
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

};


function areSameTrees(a, b){
    if(!a && !b) return true;
    if(!a || !b) return false;

    if(a.val != b.val) return false;

    return areSameTrees(a.left, b.left) && areSameTrees(a.right, b.right);
}