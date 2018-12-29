function loadCommits() {
  const username = $('#username').val();
  const repo = $('#repo').val();
  const $commits = $('#commits');
  const URL = `https://api.github.com/repos/${username}/${repo}/commits`;

  $.get(URL)
    .then((data) => {
      data.map(obj => {
        $commits.append($('<li>').text(`${obj.commit.author.name}: ${obj.commit.message}`));
      });
    })
    .catch((err) => {
      $commits.append($('<li>').text(`Error: ${err.status} (${err.statusText})`));
    });
}