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
 * @return {number[][]}
 */
// const { Queue } = require('@datastructures-js/queue');
var levelOrder = function(root) {
    // console.log(Queue.toString());
    if(!root) return [];
    
    let result = [];
    let q = new Queue();
    q.enqueue(root);

    while(q.size()){
        let levelSize = q.size();
        let levelNodes = [];
        while(levelSize){
            let node = q.dequeue();
            levelSize--;
            levelNodes.push(node.val);

            if(node.left) q.enqueue(node.left);
            if(node.right) q.enqueue(node.right);
        }
        result.push(levelNodes);
    }
    return result;
};