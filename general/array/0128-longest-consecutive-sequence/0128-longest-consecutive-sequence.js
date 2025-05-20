/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxLen = 0;
    let elements = new Set(nums);
    for(let n of elements){ // Gotcha : Iterate over set instead of nums since nums can contain same element million times.
        if(elements.has(n-1)){
            continue;
        } else {
            let count = 0;
            let i = n;
            while(elements.has(i)){
                count++;
                i++;
            }
            maxLen = Math.max(maxLen, count);
        }
    }
    return maxLen;
};