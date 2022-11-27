function stars(s=5){
    let string = "";

    for(let i = 0; i < s; i++) {
        for(let j = 0; j < s; j++) {
            string += '* ';
        }
        string += '\n';
    }
    console.log(string);
}

stars(2)