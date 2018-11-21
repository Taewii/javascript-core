function moviePrices(movie) {
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let movies = {
        'the godfather': [12, 10, 15, 12.50, 15, 25, 30],
        'schindler\'s list': [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15],
        'casablanca': [8, 8, 8, 8, 8, 10, 10],
        'the wizard of oz': [10, 10, 10, 10, 10, 15, 15],
    };

    let title = movie[0].toLowerCase();
    let day = movie[1].toLowerCase();
    let dayIndex = days.indexOf(day);

    if (dayIndex !== -1) {
        return movies[title][dayIndex];
    } else {
        return 'error';
    }
}

console.log(moviePrices(['The Godfather', 'Friday']));
console.log(moviePrices(['casablanca', 'sunday']));
console.log(moviePrices(["Schindler's LIST", 'monday']));
console.log(moviePrices(['SoftUni', 'Nineday']));