/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {

//     // 1. Nested Loop
//     // for (let first = 0; first < nums.length; first++) {
//     //     for (let second = first + 1; second < nums.length; second++) {
//     //         if (nums[first] + nums[second] == target) {
//     //             return [first, second];
//     //         }
//     //     }
//     // }

//     // 2. Search for compliment in hashmap & store current in hashmap if not found
//     // let map = {};
//     // for (let i = 0; i < nums.length; i++) {
//     //     let compliment = target - nums[i];
//     //     if (map[compliment] >= 0) {
//     //         return [map[compliment], i];
//     //     }
//     //     map[nums[i]] = i;
//     // }

//     // 3. Array of {element : index} and sort this. Use two pointers from both ends.
//     let elementIndexList = nums.map((element, index) => [element, index]);
//     // Create [element, index] array instead of object since it's easier to refer to both using indices. 
//     // Otherwise we'd need to create {element : x, index : i} so that both can be referred.
//     elementIndexList.sort((a, b) => a[0] - b[0]);
//     let left = 0, right = nums.length - 1;
//     while (left <= right) {
//         let sum = elementIndexList[left][0] + elementIndexList[right][0];
//         if (sum < target) {
//             left++;
//         } else if (sum > target) {
//             right--;
//         } else {
//             return [elementIndexList[left][1], elementIndexList[right][1]];
//         }
//     }

// };


var twoSum = function (nums, target) {
    let visited = {};
    for(let i = 0; i < nums.length; i++){
        let required = target - nums[i];
        if(visited[required] >= 0){
            return [visited[required], i];
        }
        visited[nums[i]] = i;
    }
    // No need of default case since valid answer always exists.
}