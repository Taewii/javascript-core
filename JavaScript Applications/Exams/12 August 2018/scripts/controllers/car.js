const car = (() => {
  const validateCarData = (title, description, brand, model, fuelType, year, price, imageUrl) => {
    if (!title || !description || !brand || !model || !fuelType || !year || !price || !imageUrl) {
      notification.error('All fields are required');
      return false;
    }

    if (title.length > 33) {
      notification.error('The title length must not exceed 33 characters!');
      return false;
    }

    if (description.length < 30 || description.length > 450) {
      notification.error('The description length must not exceed 450 characters and should be at least 30!');
      return false;
    }

    if (brand.length + model.length + fuelType.length > 33) {
      notification.error('The brand, fuelType and model length must not exceed 11 characters!');
      return false;
    }

    if (model.length < 4) {
      notification.error('The model length should be at least 4 characters!');
      return false;
    }

    if (year.length !== 4) {
      notification.error('The year must be only 4 chars long!');
      return false;
    }

    if (+price < 0 || +price > 1000000) {
      notification.error('The maximum price is 1000000$');
      return false;
    }

    if (!imageUrl.startsWith('http')) {
      notification.error('Link url should always start with “http”.');
      return false;
    }

    return true;
  };

  const all = (ctx) => {
    carModel.getAll()
      .done(cars => {
        ctx.cars = cars.map(car => {
          car.isAuthor = ctx.id === car._acl.creator;
          return car;
        });
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          car: '/templates/car/car.hbs',
          section: '/templates/car/all.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          this.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const getCreate = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/car/create.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      this.partial('/templates/common/main.hbs');
    });
  };

  const postCreate = (ctx) => {
    const title = ctx.params.title.trim();
    const description = ctx.params.description.trim();
    const brand = ctx.params.brand.trim();
    const model = ctx.params.model.trim();
    const year = ctx.params.year.trim();
    const imageUrl = ctx.params.imageUrl.trim();
    const fuelType = ctx.params.fuelType.trim();
    const price = ctx.params.price.trim();

    if (validateCarData(title, description, brand, model, fuelType, year, price, imageUrl)) {
      const data = {
        title,
        description,
        brand,
        model,
        year,
        price,
        imageUrl,
        fuel: fuelType,
        seller: ctx.username
      };

      carModel.create(data)
        .done(() => {
          notification.info('Listing created.');
          ctx.redirect('#/all');
        })
        .fail(notification.handleError);
    }
  };

  const getEdit = (ctx) => {
    const id = ctx.params.id;
    carModel.getOne(id)
      .done((carInfo) => {
        ctx.car = carInfo;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/car/edit.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          this.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const postEdit = (ctx) => {
    const id = ctx.params.id;
    const title = ctx.params.title.trim();
    const description = ctx.params.description.trim();
    const brand = ctx.params.brand.trim();
    const model = ctx.params.model.trim();
    const year = ctx.params.year.trim();
    const imageUrl = ctx.params.imageUrl.trim();
    const fuelType = ctx.params.fuelType.trim();
    const price = ctx.params.price.trim();

    if (validateCarData(title, description, brand, model, fuelType, year, price, imageUrl)) {
      const data = {
        title,
        description,
        brand,
        model,
        year,
        price,
        imageUrl,
        fuel: fuelType,
        seller: ctx.username
      };

      carModel.edit(id, data)
        .done(() => {
          notification.info('Car successfully edited.');
          ctx.redirect('#/all');
        })
        .fail(notification.handleError);
    }
  };

  const myListings = (ctx) => {
    carModel.getAll()
      .done(data => {
        ctx.cars = data.filter(car => car.seller === ctx.username);
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          car: '/templates/car/my-listing-car.hbs',
          section: '/templates/car/my-listings.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          this.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const details = (ctx) => {
    const id = ctx.params.id;
    carModel.getOne(id)
      .done(carInfo => {
        carInfo.isAuthor = carInfo.seller === ctx.username;
        ctx.car = carInfo;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          section: '/templates/car/details.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          this.partial('/templates/common/main.hbs');
        });
      })
      .fail(notification.handleError);
  };

  const remove = (ctx) => {
    const id = ctx.params.id;
    carModel.remove(id)
      .done(() => {
        notification.info('Listing deleted.');
        ctx.redirect('#/all');
      })
      .fail(notification.handleError);
  };

  return {
    all,
    getCreate,
    postCreate,
    getEdit,
    postEdit,
    myListings,
    details,
    remove
  };
})();