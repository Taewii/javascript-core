const pet = (() => {
  const getCreate = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/pet/createPet.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      ctx.partial('/templates/common/main.hbs');
    });
  };

  const postCreate = (ctx) => {
    const data = {
      name: ctx.params.name,
      description: ctx.params.description,
      imageURL: ctx.params.imageURL,
      category: ctx.params.category,
      likes: 0
    };

    petModel.create(data)
      .done(() => {
        notification.info('Pet created successfully.');
        ctx.redirect('#/dashboard');
      })
      .fail(notification.handleError);
  };

  const dashboard = (ctx) => {
    petModel.getAll()
      .done((data) => {
        ctx.pets = data.filter(animal => animal._acl.creator !== ctx.id);
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/pet/dashboard.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const category = (ctx) => {
    const category = ctx.params.category;
    petModel.getAllByCategory(category)
      .done((data) => {
        ctx.pets = data.filter(animal => animal._acl.creator !== ctx.id);
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/pet/dashboard.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const mine = (ctx) => {
    const userId = JSON.parse(sessionStorage.getItem('user_id'));
    petModel.mine(userId)
      .done((data) => {
        ctx.pets = data;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/pet/myPets.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const edit = (ctx) => {
    const id = ctx.params.id;
    const description = ctx.params.description;

    petModel.get(id)
      .done(pet => {
        pet.description = description;
        petModel.edit(id, pet)
          .done(() => {
            notification.info(`Successfully edited ${pet.name}`);
            ctx.redirect('#/dashboard');
          })
          .fail(notification.handleError);
      })
      .fail(notification.handleError);
  };

  const likePet = (ctx) => {
    const id = ctx.params.id;

    petModel.get(id)
      .done(pet => {
        pet.likes = +pet.likes + 1;
        petModel.edit(id, pet) //TOSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
          .done(() => {
            notification.info(`Successfully liked ${pet.name}`);
            ctx.redirect('#/dashboard');
          })
          .fail(notification.handleError);
      })
      .fail(notification.handleError);
  };

  const details = (ctx) => {
    const id = ctx.params.id;
    petModel.get(id)
      .done(pet => {
        pet.isMine = pet._acl.creator === ctx.id;
        ctx.pet = pet;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/pet/details.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const deleteGet = (ctx) => {
    const id = ctx.params.id;
    petModel.get(id)
      .done(pet => {
        ctx.pet = pet;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/pet/delete.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const deletePost = (ctx) => {
    const id = ctx.params.id;
    petModel.remove(id)
      .done(() => {
        notification.info('Pet successfully deleted.');
        ctx.redirect('#/dashboard');
      })
      .fail(notification.handleError);
  };

  return {
    getCreate,
    postCreate,
    dashboard,
    category,
    mine,
    likePet,
    details,
    edit,
    deleteGet,
    deletePost,
  };
})();