function attachEvents() {
  const URL = 'https://baas.kinvey.com/appdata/kid_rJWFwk4ZE/';
  const AUTH = {
    'Authorization': 'Basic ' + btoa('Pesho:p')
  };

  const $posts = $('#posts');
  const $loadBtn = $('#btnLoadPosts');
  const $viewBtn = $('#btnViewPost');
  const $postTitle = $('#post-title');
  const $postBody = $('#post-body');
  const $postComments = $('#post-comments');

  $loadBtn.on('click', loadPosts);
  $viewBtn.on('click', viewPost);

  function viewPost() {
    const $currentPost = $posts.find(':selected');
    const postName = $currentPost.text();
    const postId = $currentPost.attr('value');

    $postTitle.text(postName);

    const getPostRequest = {
      method: 'GET',
      url: URL + `posts/${postId}`,
      headers: AUTH,
    };

    const getCommentsRequest = {
      method: 'GET',
      url: URL + `comments/?query={"post_id":"${postId}"}`,
      headers: AUTH,
    };

    $.ajax(getPostRequest)
      .then(post => $postBody.text(post.body))
      .catch(handleError);

    $.ajax(getCommentsRequest)
      .then(displayComments)
      .catch(handleError);
  }

  function loadPosts() {
    const getPostsRequest = {
      type: "GET",
      url: URL + 'posts',
      headers: AUTH,
    };

    $.ajax(getPostsRequest)
      .then(addPostOptions)
      .catch(handleError);
  }

  function addPostOptions(data) {
    data.map((element) => {
      $posts.append($('<option>').attr('value', element._id).text(element.title));
    });
  }

  function displayComments(comments) {
    $postComments.empty();
    comments.map(comment => {
      $postComments.append($('<li>').text(comment.text));
    });
  }

  function handleError(err) {
    console.error(err);
  }
}