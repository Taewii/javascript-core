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
    this.get('#/deleteUser/:id', user.remove);

    this.get('#/details/:id', meme.details);

    this.get('#/create', meme.getCreate);
    this.post('#/create', meme.postCreate);

    this.get('#/edit/:id', meme.getEdit);
    this.post('#/edit/:id', meme.postEdit);

    this.get('#/delete/:id', meme.remove);

    this.get('#/user/:id', user.profile);
  })).run('#/');
});