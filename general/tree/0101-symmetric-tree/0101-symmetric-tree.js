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
// var isSymmetric = function(root) {
//     if(!root) return true;
//     function helper(p,q){
//         if(!p && !q) return true;
//         if(!p || !q || (p.val !== q.val)) return false;

//         return helper(p.left, q.right) && helper(p.right, q.left);
//     }
//     return helper(root.left, root.right);
// };

function isSymmetric(root){
    if(!root) return true;

    let q = [[root.left, root.right]];
    while(q.length){
        let [root1, root2] = q.shift();
        if(!root1 && !root2) continue;
        if(!root1 || !root2 || root1.val != root2.val) return false;

        q.push([root1.left, root2.right], [root1.right, root2.left]);
    }
    return true;
}