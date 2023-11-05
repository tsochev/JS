function towns(arr) {
    let obj = {};
    // key: {product: {town, price}}
    for (let el of arr) {
        let elSplit = el.split(' | ');
        let town = elSplit[0];
        let product = elSplit[1];
        let price = Number(elSplit[2]);
        
        if (!obj.hasOwnProperty(product)) {
            obj[product] = {town, price};
        } else {
            if (price < obj[product].price) {
                obj[product] = {town, price};
            }
        }

    }

    let productNames = Object.keys(obj);
    for (let index = 0; index < productNames.length; index++) {
        let productName = productNames[index];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`)
    }
}

towns(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])