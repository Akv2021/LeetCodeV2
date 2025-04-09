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
//   - add to visited map. #Gotcha : Since using map so we can use node also as key
//   - for all neighbours of org 
//     - make calls to convert the subtrees (or subgraphs) & push those nodes to neighbours of copy
//   - return the copy
// var cloneGraph = function(node) {
//     if(!node) return node;

//     let visited = new Map();

//     function dfs(node){
//         if(visited.has(node.val)){
//             return visited.get(node.val);
//         }

//         let clone = new _Node(node.val);
//         visited.set(node.val, clone);   // #Gotcha : Since using map so we can use node also as key

//         for(let neighbor of node.neighbors){
//             clone.neighbors.push(dfs(neighbor));
//         }

//         return clone;
//     }  

//     return dfs(node);
// };


function cloneGraph(node) {
    if (!node) return null;

    const visitedMap = new Map();
    const queue = [node];
    visitedMap.set(node, new Node(node.val));

    while (queue.length > 0) {
        const current = queue.shift();

        for (let neighbor of current.neighbors) {
            if (!visitedMap.has(neighbor)) {
                // Clone the neighbor and add to queue
                visitedMap.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            // Link the clone of the neighbor to the current clone
            visitedMap.get(current).neighbors.push(visitedMap.get(neighbor));
        }
    }

    return visitedMap.get(node);
}