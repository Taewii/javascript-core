function getInfo() {
  const URL = 'https://judgetests.firebaseio.com/businfo/';

  const $stopId = $('#stopId');
  const $stopName = $('#stopName');
  const $buses = $('#buses');

  const stopId = $stopId.val();

  $.get(URL + stopId + '.json')
    .then(displayData)
    .catch(handleError);

  function displayData(data) {
    $stopName.text(data.name);
    $buses.empty();
    for (const bus of Object.keys(data.buses)) {
      $buses.append($('<li>').text(`Bus ${bus} arrives in ${data.buses[bus]} minutes`));
    }
  }

  function handleError(err) {
    $buses.empty();
    $stopName.text('Error');
    console.log(err);
  }
}