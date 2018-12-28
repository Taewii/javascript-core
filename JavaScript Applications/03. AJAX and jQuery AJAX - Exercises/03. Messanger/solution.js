function attachEvents() {
  const URL = 'https://database-5da34.firebaseio.com/';
  const $messages = $('#messages');
  const $sendBtn = $('#submit');
  const $refreshBtn = $('#refresh');
  const $author = $('#author');
  const $content = $('#content');

  $sendBtn.on('click', sendMessage);
  $refreshBtn.on('click', refreshMessages);

  function refreshMessages() {
    $messages.text('');
    $.get(URL + '.json')
      .then(res => {
        const keys = Object.keys(res).sort((a, b) => a.timestamp - b.timestamp);
        for (const key of keys) {
          $messages.append(`${res[key].author}: ${res[key].content}\n`);
        }
      });
  }

  function sendMessage() {
    const author = $author.val();
    const content = $content.val();

    if (author && content) {
      const data = JSON.stringify({
        author,
        content,
        timestamp: Date.now(),
      });

      $.post(URL + '.json', data)
        .then(refreshMessages)
        .catch(() => $messages.text('Error'));

      $author.val('');
      $content.val('');
    }
  }

  refreshMessages();
}