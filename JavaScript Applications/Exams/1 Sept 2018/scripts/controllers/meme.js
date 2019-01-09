const meme = (() => {
  const validateInputData = (title, description, imageUrl) => {
    if (!title || !description || !imageUrl) {
      notification.error('All fields are required.');
      return false;
    }

    if (title.length > 33) {
      notification.error('Title length must not exceed 33 characters!');
      return false;
    }

    if (description.length < 30 || description.length > 450) {
      notification.error('Description length must not exceed 450 characters and should be at least 30!');
      return false;
    }

    if (!imageUrl.startsWith('http')) {
      notification.error('Link url should always start with "http".');
      return false;
    }

    return true;
  };

  const getCreate = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/meme/create.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      ctx.partial('/templates/common/main.hbs');
    });
  };

  const postCreate = (ctx) => {
    const title = ctx.params.title;
    const description = ctx.params.description;
    const imageUrl = ctx.params.imageUrl;

    if (validateInputData(title, description, imageUrl)) {
      const data = {
        title,
        description,
        imageUrl,
        creator: ctx.username
      };
      memeModel.create(data)
        .done(() => {
          notification.info('meme created.');
          ctx.redirect('#/');
        })
        .fail(notification.handleError);
    }
  };

  const details = (ctx) => {
    const id = ctx.params.id;
    memeModel.get(id)
      .done(data => {
        data.isAuthor = data.creator === ctx.username;
        ctx.meme = data;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/meme/details.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const getEdit = (ctx) => {
    const id = ctx.params.id;
    memeModel.get(id)
      .done(data => {
        ctx.meme = data;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/meme/edit.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const postEdit = (ctx) => {
    const title = ctx.params.title;
    const description = ctx.params.description;
    const imageUrl = ctx.params.imageUrl;

    if (validateInputData(title, description, imageUrl)) {
      const data = {
        title,
        description,
        imageUrl,
        creator: ctx.username
      };
      memeModel.create(data)
        .done(() => {
          notification.info(`Meme ${title} updated.`);
          ctx.redirect('#/');
        })
        .fail(notification.handleError);
    }
  };

  const remove = (ctx) => {
    const id = ctx.params.id;
    memeModel.remove(id)
      .done(() => {
        notification.info('Meme deleted.');
        ctx.redirect('#/');
      })
      .fail(notification.handleError);
  };

  return {
    getCreate,
    postCreate,
    details,
    getEdit,
    postEdit,
    remove,
  };
})();