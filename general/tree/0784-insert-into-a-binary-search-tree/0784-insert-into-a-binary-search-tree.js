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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val, null, null);
    let parent = root,  // Gotcha : At the end of while loop, the node is null, but we need parent to attach new node.
        node = root; // Gothca : Since we need access to original root for returning
    while(node){
        parent = node;
        if(val < node.val){
            node = node.left;
        } else {
            node = node.right;
        }
    }
    if(val < parent.val){
        parent.left = new TreeNode(val, null, null)
    } else {
        parent.right = new TreeNode(val, null, null)
    }
    return root;
};