$(() => {
  renderCatTemplate();

  async function renderCatTemplate() {
    const source = await $.get('templates/catTemplate.hbs');
    const template = Handlebars.compile(source);
    const html = template({ cats });
    $('#allCats').append(html);

    $('button').on('click', function () {
      const $this = $(this);
      if ($this.text() === 'Show status code') {
        $this.siblings(0).show();
        $this.text('Hide status code');
      } else {
        $this.siblings(0).hide();
        $this.text('Show status code');
      }
    });
  }
});
