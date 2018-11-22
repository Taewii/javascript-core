function dayOfWeek(day) {
    let days = [
        null,
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]

    if (days.includes(day)) {
        return days.indexOf(day);
    } else {
        return 'error';
    }
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Friday'));
console.log(dayOfWeek('asd'));