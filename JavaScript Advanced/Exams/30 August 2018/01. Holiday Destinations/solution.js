function addDestination() {
  const $city = $('.inputData').eq(0);
  const $country = $('.inputData').eq(1);
  const $season = $('#seasons option:selected');
  const $destinationsList = $('#destinationsList');
  const $seasonCounter = $(`#${$season.val()}`);
  
  if ($city.val() && $country.val()) {
    let tr = $('<tr>')
      .append(`<td>${$city.val()}, ${$country.val()}</td>>`)
      .append(`<td>${$season.text()}</td>`);
    $destinationsList.append(tr);
    
    $seasonCounter.val(+$seasonCounter.val() + 1);
    $city.val('');
    $country.val('')
  }
}