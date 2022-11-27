function strings(a, b, c) {
    let sumLength = a.length + b.length + c.length;
    let averageLength = sumLength / 3;

    console.log(sumLength);
    console.log(Math.floor(averageLength));
}

strings('chocolate', 'ice cream', 'cake');
strings('pasta', '5', '22.3');
