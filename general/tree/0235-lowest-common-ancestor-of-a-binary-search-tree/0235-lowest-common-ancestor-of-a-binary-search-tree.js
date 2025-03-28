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

// Recursive iteration
// var lowestCommonAncestor = function(root, p, q) {
//     if(!root || root == p || root == q){    // Here we can with compare values OR nodes directly.
//         return root;
//     }
//     let large = Math.max(p.val, q.val), // Gotcha : Here large/small are primitive and root/p/q are nodes. So be careful while comparision.
//         small = Math.min(p.val, q.val);
//     if(root.val > large){   // root = 10, p = 6, q = 8 then lca in left subtree
//         root = root.left;    // We could also make the LCA call directly here instead.
//     } else if (root.val < small){
//         root = root.right;
//     } else {        // !IMP : Since both can be on different sides. This is additional case wrt searching
//         return root;
//     }
//     return lowestCommonAncestor(root, p, q);
// };

// Iterative implementation
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q) {
        return root;
    }

    // let q = [root], // stack also same since order does not matter
    let large = Math.max(p.val, q.val), small = Math.min(p.val, q.val);

    while(root){
        if(root.val > large){
            root = root.left;
        } else if (root.val < small){
            root = root.right;
        } else {
            return root;
        }
    }
    // return null;
}
