const baseUrl = 'https://baas.kinvey.com/appdata/kid_S17EcmMb4/players/';
const authorization = {
  Authorization: 'Basic ' + btoa('user:user')
};

const $players = $('#players');
const $canvas = $('#canvas');
const $save = $('#save');
const $reload = $('#reload');
const $addPlayerBtn = $('#addPlayer');
const $addPlayerName = $('#addName');

function attachEvents() {
  loadPlayers();
  $addPlayerBtn.on('click', addPlayer);
}

function addPlayer() {
  const name = $addPlayerName.val();
  if (name) {
    $.post({
        url: baseUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          name: name,
          money: 500,
          bullets: 6
        }),
        headers: authorization
      })
      .then(loadPlayers)
      .catch(err => console.error(err));
    $('#addName').val('');
  }
}

function loadPlayers() {
  $players.empty();
  $.get({
      url: baseUrl,
      headers: authorization
    })
    .then(players => players.forEach(player => displayPlayer(player)))
    .catch(err => console.error(err));
}

function displayPlayer(player) {
  const html = $( /*html*/ `
    <div class="player" data-id="${player._id}">
      <div class="row">
          <label>Name:</label>
          <label class="name">${player.name}</label>
      </div>
      <div class="row">
          <label>Money:</label>
          <label class="money">${player.money}</label>
      </div>
      <div class="row">
          <label>Bullets:</label>
          <label class="bullets">${player.bullets}</label>
      </div>
      <button class="play">Play</button>
      <button class="delete">Delete</button>
    </div>`);
  
  $(html).find('.delete').on('click', deletePlayer);
  $(html).find('.play').on('click', startGame);
  
  async function startGame() {
    await savePlayer();
    
    $(html).find('.delete').prop('disabled', true);
    $('.play').prop('disabled', true);
    
    $save.on('click', null, player, savePlayer);
    
    $reload.on('click', null, player, reloadGun);
    
    $canvas.show();
    $save.show();
    $reload.show();
    
    loadCanvas(player);
  }
  
  async function savePlayer() {
    await $.ajax({
      method: 'PUT',
      url: baseUrl + player._id,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(player),
      headers: authorization
    });
    
    clearInterval(document.getElementById('canvas').intervalId);
    
    $canvas.hide();
    $save.hide();
    $reload.hide();
    
    $save.off('click');
    $reload.off('click');
    
    $(html).find('.money').text(player.money);
    $(html).find('.bullets').text(player.bullets);
    
    $(html).find('.delete').prop('disabled', false);
    $('.play').prop('disabled', false);
  }
  
  function reloadGun() {
    player.money -= 60;
    player.bullets = 6;
    
    $.ajax({
        method: 'PUT',
        url: baseUrl + player._id,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(player),
        headers: authorization
      })
      .then(() => {
        $(html).find('.money').text(player.money);
        $(html).find('.bullets').text(player.bullets);
      })
      .catch(err => console.error(err));
  }
  
  function deletePlayer() {
    $.ajax({
        method: "DELETE",
        url: baseUrl + player._id,
        headers: authorization
      })
      .then($(html).remove())
      .catch(err => console.error(err));
  }
  
  $players.append(html);
}