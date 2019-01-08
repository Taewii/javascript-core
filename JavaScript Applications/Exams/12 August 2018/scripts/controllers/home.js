const home = (() => {
  const index = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/home/home.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      this.partial('/templates/common/main.hbs');
    });
  };

  return {
    index,
  };
})();