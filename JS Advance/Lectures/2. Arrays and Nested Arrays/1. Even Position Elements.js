function evenIndex(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if(i % 2 == 0) {
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));
}

evenIndex(['20', '30', '40', '50', '60']);
evenIndex(['5', '10'])