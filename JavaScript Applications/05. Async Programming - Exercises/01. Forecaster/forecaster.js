function attachEvents() {
  const locationsUrl = 'https://judgetests.firebaseio.com/locations.json';
  const $location = $('#location');
  const $submitBtn = $('#submit');
  const $forecast = $('#forecast');
  const $currentForecast = $('#current');
  const $upcomingForecast = $('#upcoming');

  const conditions = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
  };

  $submitBtn.on('click', getWeather);

  function getWeather() {
    if ($location.val()) {
      $.get(locationsUrl)
        .then(filterLocation)
        .catch(handleError);
    }
  }

  function filterLocation(locations) {
    const location = locations.filter(location => location.name === $location.val())[0];
    if (location) {
      Promise.all([
          $.get(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`),
          $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json `)
        ])
        .then(displayData)
        .catch(handleError);
    } else {
      handleError();
    }
  }

  function displayData([current, upcoming]) {
    $forecast.show();
    $currentForecast.empty();

    const $label = $('<div class="label">').text('Current conditions');
    const $currentConditionSymbol = $('<span class="condition symbol">').html(conditions[current.forecast.condition]);
    const $currentCondition = $('<span class="condition">')
      .append($('<span class="forecast-data">').text(current.name))
      .append($('<span class="forecast-data">').html(`${current.forecast.low}&#176;/${current.forecast.high}&#176;`))
      .append($('<span class="forecast-data">').html(current.forecast.condition));

    $currentForecast.append($label);
    $currentForecast.append($currentConditionSymbol);
    $currentForecast.append($currentCondition);

    $upcomingForecast.empty();
    $upcomingForecast.append($('<div class="label">').text('Three-day forecast'));
    for (const day of upcoming.forecast) {
      const $currentCondition = $('<span class="upcoming">')
        .append($('<span class="symbol">').html(conditions[day.condition]))
        .append($('<span class="forecast-data">').html(`${day.low}&#176;/${day.high}&#176;`))
        .append($('<span class="forecast-data">').text(day.condition));

      $upcomingForecast.append($currentCondition);
    }
  }

  function handleError(err) {
    $upcomingForecast.empty();
    $currentForecast.empty();
    $currentForecast.append('<div>Error</div>');
    $forecast.show();
    console.error(err);
  }
}