function solution(a = 5) {
    
    function sum(b) {
        return a + b;
    }

    return sum;
}

let add7 = solution(7);

console.log(add7(2));

console.log(add7(3));