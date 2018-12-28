function attachEvents() {
  const URL = 'https://phonebook-nakov.firebaseio.com/phonebook';

  const $btnLoad = $('#btnLoad');
  const $btnCreate = $('#btnCreate');
  const $phonebook = $('#phonebook');

  $btnCreate.on('click', createEntry);
  $btnLoad.on('click', loadEntries);

  function createEntry() {
    const $person = $('#person');
    const $phone = $('#phone');

    if ($person.val().trim() && $phone.val().trim()) {
      const data = JSON.stringify({
        person: $person.val(),
        phone: $phone.val(),
      });

      $.post(URL + '.json', data)
        .then(loadEntries)
        .catch(handleError);

      $person.val('');
      $phone.val('');
    }
  }

  function loadEntries() {
    $.get(URL + '.json')
      .then(displayData)
      .catch(handleError);
  }

  function displayData(data) {
    $phonebook.empty();
    const keys = Object.keys(data);

    for (const key of keys) {
      $phonebook
        .append($('<li>')
          .text(`${data[key].person}: ${data[key].phone}`)
          .append($('<button>')
            .text('[Delete]')
            .on('click', deleteEntry.bind(this, key))));
    }
  }

  function deleteEntry(key) {
    $.ajax({
        type: "DELETE",
        url: URL + '/' + key + '.json',
      })
      .then(loadEntries)
      .catch(handleError);
  }

  function handleError(err) {
    $phonebook.append($('<li>').text('Error'));
    console.log(err);
  }
}