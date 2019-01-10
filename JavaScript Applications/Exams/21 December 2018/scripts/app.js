$(() => {
  (Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.before({ except: {} }, (ctx) => {
      const user = storage.getUser();
      ctx.username = user.name;
      ctx.id = user.id;
      ctx.isAuth = !!ctx.id;
      notification.hideError();
    });

    this.get('#/', home.index);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);
    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/logout', user.logout);

    this.get('#/all', song.all);
    this.get('#/my-songs', song.mine);

    this.get('#/create', song.getCreate);
    this.post('#/create', song.postCreate);

    this.get('#/like/:id', song.like);
    this.get('#/listen/:id', song.listen);

    this.get('#/delete/:id', song.remove);
  })).run('#/');
});