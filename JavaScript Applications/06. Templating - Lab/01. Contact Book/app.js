(async () => {
  const data = await $.get('data.json');
  const source = await $.get('templates/content.hbs');
  let template = Handlebars.compile(source);
  let html = template({ contacts: data });
  $('#list').append(html);

  $('.contact').on('click', function () {
    const index = $(this).attr('data-id');
    $.get('templates/details.hbs')
      .then((res) => {
        template = Handlebars.compile(res);
        html = template(data[index]);
        $('#details > .content div').remove();
        $('#details > .content').append(html);
      });

    $(this).addClass('selected')
      .siblings()
      .removeClass('selected');
  });
})();
