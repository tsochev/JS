function number(n) {
    let sameNums = '';
    let result = 0;
    let strNums = n.toString()

    for (let i = 0; i < strNums.length; i++) {
        if(strNums[0] != strNums[i]){
            sameNums = 'false'; 
            break;
        } else {
            sameNums = 'true';
        }
        
    }
    
    console.log(sameNums)

    for (let i = 0; i < strNums.length; i++) {
        result += parseInt(strNums[i]); 
    }

    console.log(result)
}

number(2222222)
number(1234)
