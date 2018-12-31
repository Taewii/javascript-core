const $venueInfo = $('#venue-info');
const Authorization = 'Basic ' + btoa('guest:pass');

function attachEvents() {
  $('#getVenues').on('click', getVenues);
}

function getVenues() {
  const dates = $('#venueDate').val();
  
  if (dates) {
    $.ajax({
        method: 'POST',
        url: `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${dates}`,
        headers: {Authorization}
      })
      .then(getDates)
      .catch(handleError);
  }
}

function getDates(data) {
  $venueInfo.empty();
  Promise.all(data.map(id =>
      $.get({
        url: `https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${id}`,
        headers: {Authorization}
      })))
    .then(arr => arr.forEach(venue => displayVenue(venue)))
    .catch(handleError);
}

function displayVenue(venue) {
  const html = $( /*html*/ `
    <div class="venue" id="${venue._id}">
      <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
      <div class="venue-details" style="display: none;">
        <table>
          <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
          <tr>
            <td class="venue-price">${venue.price} lv</td>
            <td><select class="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select></td>
            <td><input class="purchase" type="button" value="Purchase"></td>
          </tr>
        </table>
        <span class="head">Venue description:</span>
        <p class="description">${venue.description}</p>
        <p class="description">Starting time: ${venue.startingHour}</p>
      </div>
    </div>`);
  
  $(html).find('.info').on('click', () => {
    $(html).find('.venue-details').show();
  });
  
  $(html).find('.purchase').on('click', () => {
    const quantity = +$(html).find('.quantity').find(':selected').text();
    renderPurchaseView(venue, quantity);
  });
  
  $venueInfo.append(html);
}

function renderPurchaseView(venue, quantity) {
  const totalSum = +venue.price * quantity;
  $venueInfo.empty();
  
  const confirmationHtml = $( /*html*/ `
    <span class="head">Confirm purchase</span>
    <div class="purchase-info">
      <span>${venue.name}</span>
      <span>${quantity} x ${venue.price}</span>
      <span>Total: ${totalSum} lv</span>
      <input type="button" value="Confirm">
    </div>`);
  
  $(confirmationHtml).find('input[type="button"]').on('click', confirmTransaction(venue._id, quantity));
  $venueInfo.append(confirmationHtml);
}

function confirmTransaction(id, quantity) {
  $.post({
      url: `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${quantity}`,
      headers: {Authorization},
    })
    .then(data => {
      $venueInfo.empty()
        .append('<span>You may print this page as your ticket</span>')
        .append(data.html);
    });
}

function handleError(err) {
  let x = $('#venue-info').empty();
  x.text(error.status + ":" + error.statusText);
  console.error(err);
}