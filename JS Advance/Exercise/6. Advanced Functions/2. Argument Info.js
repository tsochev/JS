function solve() {
    const params = Array.from(arguments)

    const types = {};

    for (let arg of params) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if(types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let line of result) {
        console.log(`${line[0]} = ${line[1]}`)
    }
}


solve(1, 'a' , 'b')