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
// Using recursion
// var isSameTree = function(p, q) {
//     function isSameTree(root1, root2){   // this method is not required, just created while trying to rename params.
//         if(!root1 && !root2){
//             return true;
//         }
//         if((!root1 && root2) || (root1 && !root2)) {
//             return false;
//         }

//         if(root1.val !== root2.val){
//             return false;
//         }

//         return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
//     }
//     return treeMatch(p,q);
// };
// TC - n+m, SC - max height among both trees

// Using Queue
var isSameTree = function(a,b){
    let q = [a,b];
    while(q.length){
        let [a,b] = [q.shift(), q.shift()];
        if(!a && !b) continue;
        if(!a || !b || (a.val != b.val)) return false;
        q.push(a.left, b.left, a.right, b.right);
    }
    return true;
}

// TC - n+m, SC - n+m since last level of both will be present in worst case which is n/2 & m/2