function cooking(num, com1, com2, com3, com4, com5){
    num = Number(num);

    let commandList = [com1, com2, com3, com4, com5]

    let chop = x => x/ 2;
    let dice = x => Math.sqrt(x);
    let spice = x => x + 1;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    for(let i = 0; i< commandList.length; i++){
        switch (commandList[i]) {
            case 'chop':
                num = chop(num);
                break;
            case 'dice':
                num = dice(num);
                break;
            case 'spice':
                num = spice(num);
                break;
            case 'bake':
                num = bake(num);
                break;
            case 'fillet':
                num = fillet(num);
                break;
            default:
                break;
        } 
        console.log(num)
    }
    
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')