const home = (() => {
  const index = (ctx) => {
    if (ctx.isAuth) {
      memeModel.getAll()
        .done(data => {
          ctx.memes = data.map(meme => {
            meme.isAuthor = meme.creator === ctx.username;
            return meme;
          });
          ctx.loadPartials({
            header: '/templates/common/header.hbs',
            footer: '/templates/common/footer.hbs',
            section: '/templates/home/index.hbs',
            listAll: '/templates/meme/list-all.hbs',
          }).then(function () {
            ctx.partials = this.partials;
            ctx.partial('/templates/common/main.hbs');
          });
        })
        .fail(notification.handleError);
    } else {
      ctx.loadPartials({
        header: '/templates/common/header.hbs',
        footer: '/templates/common/footer.hbs',
        section: '/templates/home/index.hbs',
        listAll: '/templates/meme/list-all.hbs',
      }).then(function () {
        ctx.partials = this.partials;
        ctx.partial('/templates/common/main.hbs');
      });
    }
  };

  return {
    index
  };
})();