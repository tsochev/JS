function solve(arr) {
    let newArr = [];
    let biggerNum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggerNum) {
            biggerNum = arr[i];
            newArr.push(biggerNum);
        }
    }
    return newArr
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
solve([1, 2, 3, 4])
solve([20, 3, 2, 15, 6, 1])