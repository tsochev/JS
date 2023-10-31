function addOrRemove(arr) {
    let numsArr = [];
    let initialNum = 0;

    

    for (let el of arr) {
        initialNum += 1;
        if (el == 'add') {
            numsArr.push(initialNum);
        } else if (el == 'remove') {
            if (numsArr.length > 0) {
                
                numsArr.pop();
            }
        }
    }

    if (numsArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(numsArr.join('\n'));
    }
    
}

addOrRemove(['add', 'add', 'remove', 'add', 'add'])
addOrRemove(['add','add','add','add'])