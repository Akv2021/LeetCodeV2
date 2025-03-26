/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let em = numBottles, total = numBottles, ex = numExchange;
    while(em >= ex){
        let newFull = Math.floor(em/ex);
        let remaining = em % ex;
        em = newFull + remaining;
        total += newFull;
    }
    return total;
};


// var numWaterBottles = function(numBottles, numExchange) {
//     let emptyBottles = numBottles, totalBottlesConsumed = numBottles;  // Start with initial full bottles, which are all empty now
//     while (emptyBottles >= numExchange) {
//         let newFullBottles = Math.floor(emptyBottles / numExchange);  // How many new full bottles we can get from empty bottles
//         let remainingEmptyBottles = emptyBottles % numExchange;  // Leftover empty bottles that cannot be exchanged
//         emptyBottles = newFullBottles + remainingEmptyBottles;  // Update the number of empty bottles (new + remaining ones)
//         totalBottlesConsumed += newFullBottles;  // Add newly full bottles to total count of consumed bottles
//     }
//     return totalBottlesConsumed;  // Return the total number of bottles consumed
// };
