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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];

    let q = new Queue();
    q.push(root);
    let result = [];

    while(q.size()){
        let levelSize = q.size();
        result.push(q.front().val); // rightmost node to result but not removed from q since still the children need to be pushed.
        
        while(levelSize){
            let node = q.pop();
            levelSize--;
            if(node.right) q.push(node.right);  // Push rightmost node first.
            if(node.left) q.push(node.left);
        }
    }
    return result;
};