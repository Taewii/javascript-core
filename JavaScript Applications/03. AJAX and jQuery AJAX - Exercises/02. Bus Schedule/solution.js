function solve() {
  const URL = 'https://judgetests.firebaseio.com/schedule/';
  const $arriveBtn = $('#arrive');
  const $departBtn = $('#depart');
  const $info = $('#info > span');

  let stopID = 'depot';
  let stopName = '';

  const arrive = () => {
    $info.text(`Arriving at ${stopName}`);
    $arriveBtn.attr('disabled', true);
    $departBtn.attr('disabled', false);
  };

  const depart = () => {
    $.get(URL + stopID + '.json')
      .then((schedule) => {
        stopName = schedule.name;
        stopID = schedule.next;
        $info.text(`Next stop ${stopName}`);
        $arriveBtn.attr('disabled', false);
        $departBtn.attr('disabled', true);
      })
      .catch(handleError);
  };

  const handleError = (err) => {
    console.log(err);
    $info.text('Error');
    $arriveBtn.attr('disabled', false);
    $departBtn.attr('disabled', false);
  };

  return {
    depart,
    arrive
  };
}