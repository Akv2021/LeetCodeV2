/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

// - empty case
// - visited Map initiatise
// - call dfs for node
// - In dfs
//   - check if it exists in visted
//     - yes then retrun node from map
//   - create a new clone with that org node value
//   - add to visited map
//   - for all neighbours of org 
//     - make calls to convert the subtrees (or subgraphs) & push those nodes to neighbours of copy
//   - return the copy
var cloneGraph = function(node) {
    if(!node) return node;

    let visited = new Map();

    function dfs(node){
        if(visited.has(node.val)){
            return visited.get(node.val);
        }

        let clone = new _Node(node.val);
        visited.set(node.val, clone);

        for(let neighbor of node.neighbors){
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }  

    return dfs(node);
};