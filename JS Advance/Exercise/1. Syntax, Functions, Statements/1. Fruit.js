function fruit(type, grams, pricePerKilo) {
    let kilogram = (grams / 1000);
    let money = kilogram * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${kilogram.toFixed(2)} kilograms ${type}.`)
   
} 

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)