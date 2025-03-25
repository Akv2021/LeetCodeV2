/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let str = x+'';
//     let l = 0, r = str.length - 1;
//     while(l<r){
//         if(str[l] != str[r])
//         return false;
//         l++;
//         r--;
//     }
//     return true;
// };


// var isPalindrome = function(x) {
//     const str = x.toString();  // Convert the number to a string
//     const reversedStr = str.split('').reverse().join('');  // Reverse the string
//     return str === reversedStr;  // Check if the string is the same as its reverse
// };

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;  // Negative numbers and multiples of 10 (except 0) are not palindromes
    }
    
    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;  // Build the reversed half
        x = Math.floor(x / 10);  // Remove the last digit from x
    }
    
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);  // Check if both halves are equal
};
