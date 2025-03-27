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
// var maxDepth = function(root) {
//     if(!root) return 0;
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

var maxDepth = function(root) {
    if(!root) return 0;
    let q = [root], size = 1, lc = 0;
    while(q.length){
        let node = q.shift();
        size--;
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);

        if(size == 0){
            lc++;
            size = q.length;
        }
    }
    return lc;
}