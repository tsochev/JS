function solve(length, previousNumbers) {
    let resultArr = [1];
    for (let index = 1; index < length; index++) {
        let start = index - previousNumbers < 0 ? 0 : index - previousNumbers;
        let sum = resultArr.slice(start, index).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        resultArr.push(sum)
    }
    return resultArr;
}

console.log(solve(8, 2));
