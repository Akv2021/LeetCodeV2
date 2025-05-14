/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Store count of all keys in string1
    let charMap = {};
    for(let c of s){
        charMap[c] = (charMap[c] || 0) + 1;
    }

    // Use string2 to decrement the counts and early return if different keys/ extra occurences in string2
    for(let c of t){
        if(!charMap[c]) // Not exists OR count == 0
            return false;
        else
            charMap[c]--;
    }
    
    // Check map to see if there is any key for which the counter was not reduced to 0
    for(let key in charMap){
        if(charMap[key])
            return false;
    }
    return true;
};