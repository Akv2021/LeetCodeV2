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
var kthSmallest = function(root, k) {
    let nodesVisitedTillNow = 0;
    var kthSmallestValue;
    function inorder(root){
        if(!root) return;

        inorder(root.left);
        nodesVisitedTillNow++;

        if(nodesVisitedTillNow == k){
            kthSmallestValue = root.val;
            return;
        }
        
        inorder(root.right);
    }

    inorder(root);
    return kthSmallestValue;

};