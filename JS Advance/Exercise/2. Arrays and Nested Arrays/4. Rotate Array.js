function solve(arr, rotates) {
    while (rotates > 0) {
        rotates -= 1
        lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(' '));
}

// solve(['1','2','3','4'],2)
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)