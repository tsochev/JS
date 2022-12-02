function matrix(input){
    let bigestNum = Number.NEGATIVE_INFINITY;

    for (let row of input){
        for (let cow of row){
            if (cow > bigestNum) {
                bigestNum = cow;
            }
        }
    }

    return bigestNum;
}

console.log(matrix([[20, 50, 10],
  [8, 33, 145]]))

console.log(matrix([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))

