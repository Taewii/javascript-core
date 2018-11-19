function solve(year, month, day) {
    let oneDay = 24 * 60 * 60 * 1000;
    let date = new Date(year, month - 1, day);
    let nextDate = new Date(date.getTime() + oneDay);

    console.log([nextDate.getFullYear(),  nextDate.getMonth() + 1, nextDate.getDate()].join('-'))

}

solve(2016, 9, 30);