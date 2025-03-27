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
var diameterOfBinaryTree = function(root, maxDia = {val : 0}) { // #GTA Make object to pass by reference. Primitive type pass by value (i.e. pass a copy)
    if(!root) return 0;
    
    let leftEdges = maxDepth(root.left) ,   // #Gotcha : Since we send left for depth so (Depth for r.l = No of nodes till r.l = No of edges till Root)
        rightEdges = maxDepth(root.right) ;
    
    maxDia.val = Math.max(maxDia.val, leftEdges + rightEdges);
    // console.log(`${root && root.val} ${maxDia.val} ${leftEdges} ${rightEdges}`)
    diameterOfBinaryTree(root.left, maxDia);    // #Gotcha : Here we need to pass by reference so don't pass .val
    diameterOfBinaryTree(root.right, maxDia);
    return maxDia.val;
};

function maxDepth(root){
    if(!root) return 0;
    return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
}