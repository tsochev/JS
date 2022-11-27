function nums(a, b, c) {
    let bigestNum;

    if (a >=b && a >=c){
        bigestNum = a;
    } else if (b >= a && b >=c){
        bigestNum = b;
    } else {
        bigestNum = c;
    }

    console.log(`The largest number is ${bigestNum}.`);
}

nums(5, -3, 16)
nums(-3, -5, -22.5)