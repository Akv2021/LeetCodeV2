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
var isValidBST = function(root) {
    let minValue = Number.MIN_SAFE_INTEGER, 
        maxValue = Number.MAX_SAFE_INTEGER;

    function checkBSTInRange(root, minValue, maxValue){
        if(!root) return true;
        if(root.val > minValue && root.val < maxValue){ // Equals sign is not taken due to problem constraints
            return checkBSTInRange(root.left, minValue, root.val) && checkBSTInRange(root.right, root.val, maxValue);
        }
        return false;
    }
    return checkBSTInRange(root, minValue, maxValue);
};