// Q. Write a function sumPositiveNumbers that takes an array of numbers as input and
// returns the sum of all positive numbers.
// Input: [1, -2, 3, 4, -5]

function sumPositiveNumbers(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total += nums[i];
        }
    }
    return total;
}

console.log(sumPositiveNumbers([1, -2, 3, -4, 5]));

Q. : Create a function doesKeyExist(obj, key) that checks if a given key exists in the
provided object (obj).

function doesKeyExist(obj, key){
    
}
console.log({'name':'John', 'age':25, 'city':'New York'});