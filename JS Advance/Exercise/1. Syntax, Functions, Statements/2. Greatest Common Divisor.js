function numbers(num1, num2) {
    if (num1 == 0) return num2;

    while(num2 != 0) {
        if (num1> num2) num1= num1-num2;
        else num2=num2-num1;

    }
    console.log(num1)
}


numbers(15, 5)
numbers(2154, 458)