function area(r){
    let areaType = typeof(r);

    if (areaType == 'number'){
        let totalArea = r ** 2 * Math.PI;
        console.log(totalArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    }
    
}

area(5);
area('name');