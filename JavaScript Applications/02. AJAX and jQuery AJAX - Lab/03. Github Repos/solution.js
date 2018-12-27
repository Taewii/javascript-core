function loadRepos() {
  const $repos = $('#repos');
  const user = $('#username').val();
  const URL = `https://api.github.com/users/${user}/repos`;
  
  $.ajax({
    type: "GET",
    url: URL,
    success: function (response) {
      $repos.empty();
      $(response).each((i, repo) => {
        $repos.append($('<li>')
          .append($('<a>').attr('href', repo.html_url).text(repo.full_name)));
      });
    },
    error: function (err) {
      $repos.append($('<li>').text('Error'));
    }
  });
}