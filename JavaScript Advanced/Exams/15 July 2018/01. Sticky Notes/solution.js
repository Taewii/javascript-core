function addSticker() {
  const $title = $('.title');
  const $content = $('.content');
  const $stickerList = $('#sticker-list');
  
  if ($title.val() && $content.val()) {
    $stickerList
      .append($('<li>').addClass('note-content')
        .append($('<a>').addClass('button').text('x'))
        .append($('<h2>').text($title.val()))
        .append($('<hr>'))
        .append($('<p>').text($content.val())));
    
    $('.button').on('click', function () {
      $(this).parent().remove();
    });
    
    $title.val('');
    $content.val('');
  }
}