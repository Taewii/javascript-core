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

    this.get('#/all', car.all);

    this.get('#/create', car.getCreate);
    this.post('#/create', car.postCreate);

    this.get('#/my-listings', car.myListings);

    this.get('#/edit/:id', car.getEdit);
    this.post('#/edit/:id', car.postEdit);

    this.get('#/details/:id', car.details);
    this.get('#/delete/:id', car.remove);
  })).run('#/');
});