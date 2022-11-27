function totalDays(month, year) {
    let daysInMonth = new Date(year, month, 0). getDate();

    console.log(daysInMonth);
}

totalDays(1, 2012)
totalDays(2, 2021)
