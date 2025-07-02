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
// var isSubtree = function(root, subRoot) {
//     if(sameTree(root, subRoot))
//         return true;

//     if(!root) return false;
//     return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
//     function sameTree(root1, root2){
//         if(!root1 && !root2) return true;
//         if(!root1 || !root2 || root1.val != root2.val) return false;
//         return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right)
//     }
// };


var isSubtree = function(root, subRoot) {
    let rootSerialized = serialize(root); 
    let subRootSerialized = serialize(subRoot); 

    return rootSerialized.includes(subRootSerialized);
} 

function serialize(root){
    if(!root) return 'X';

    let leftSerialized = serialize(root.left);
    let rightSerialized = serialize(root.right);
    return `#${root.val},${leftSerialized},${rightSerialized}`;
}