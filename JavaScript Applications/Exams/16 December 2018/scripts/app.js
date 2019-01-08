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

    this.get('#/create', pet.getCreate);
    this.post('#/create', pet.postCreate);

    this.get('#/dashboard', pet.dashboard);
    this.get('#/category/:category', pet.category);
    this.get('#/my-pets', pet.mine);

    this.get('#/like/:id', pet.likePet);

    this.get('#/details/:id', pet.details);
    this.post('#/edit/:id', pet.edit);

    this.get('#/delete/:id', pet.getDelete);
    this.post('#/delete/:id', pet.postDelete);
  })).run('#/');
});