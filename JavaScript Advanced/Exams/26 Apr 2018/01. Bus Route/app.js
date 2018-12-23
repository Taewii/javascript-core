function busRoute() {
  const $firstStop = $('[name="first-stop"]');
  const $lastStop = $('[name="last-stop"]');
  const $busStops = $('#bus-stops li');
  const $busStopText = $('#selected-route span');
  const $selectedStops = $('#selected-bus-stops');
  
  const busStopsLength = +$busStops.length;
  const firstStop = +$firstStop.val();
  const lastStop = +$lastStop.val();
  
  if (firstStop > 0 && lastStop <= busStopsLength && firstStop < lastStop) {
    $($busStopText[0]).text(`${firstStop}-${lastStop}`);
    $selectedStops.empty();
    $busStops.each((index, element) => {
      if (index + 1 >= firstStop && index + 1 <= lastStop) {
        $selectedStops.append($('<li>').text(element.textContent));
      }
    });
    
    $firstStop.val('');
    $lastStop.val('');
  }
}

$(() => {
  let busStops = [
    "Gen. Gurko St.",
    "Sofia University",
    "Eagles' Bridge Sq.",
    "Bulgarian News Agency",
    "Peyo Yavorov Blvd.",
    "Aleksandar Zhendov Bvld.",
    // You can add/remove bus stops from here
  ];
  
  let listBusStops = $('#bus-stops');
  for (let i = 0; i < busStops.length; i++) {
    const busStopLi = $('<li>').text(busStops[i]);
    
    listBusStops.append(busStopLi);
  }
});