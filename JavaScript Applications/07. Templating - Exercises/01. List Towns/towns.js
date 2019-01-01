function attachEvents() {
  $('#btnLoadTowns').on('click', () => {
    const towns = $('#towns').val()
      .split(/\s+/)
      .map(x => x.trim())
      .filter(x => x !== '');

    $('#root').empty();
    if (towns.length) {
      const source = $('#towns-template').html();
      const template = Handlebars.compile(source);
      const html = template({ towns });
      $('#root').append(html);
      $('#towns').val('');
    }
  });
}
