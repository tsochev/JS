function matrix(input) {
    let isMagical = true;

    for (let index = 0; index < input.length - 1; index++) {
        let sumRowOne = input[index].reduce((a, b) => a + b, 0);
        let sumRowTwo = input[index + 1].reduce((a, b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let j = 0; j < input.length; j++) {
            sumColOne += input[index][j];
            sumColTwo += input[index + 1][j];
        }

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false;
        }
    }
    return isMagical;
}

console.log(matrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))