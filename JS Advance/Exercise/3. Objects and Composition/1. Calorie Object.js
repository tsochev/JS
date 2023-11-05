function calorie(arr) {
    let result = {};

    for (i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let grams = Number(arr[i + 1]);

        result[food] = grams;
        
    }
    console.log(result);
}

calorie(['Yoghurt', '48', 'Rise', '138','Apple', '52'])