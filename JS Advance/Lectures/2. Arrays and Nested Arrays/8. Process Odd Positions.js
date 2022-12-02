function solve(nums){
    let newNums = [];

    for (let i = 0; i< nums.length; i++) {
        if (i % 2 != 0) {
            newNums.push(nums[i] * 2);
        }
    }

    return newNums.reverse()
}

console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))
