const user = (() => {
  const validateCredentials = (username, password, repeatPass) => {
    if (username.length < 3) {
      notification.error('Username must be at least 3 symbols!');
      return false;
    }
    if (password.length < 6) {
      notification.error('Password must be at least 6 symbols!');
      return false;
    }
    if (repeatPass && password !== repeatPass) {
      notification.error('Passwords don\'t match!');
      return false;
    }
    return true;
  };

  const getRegister = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/user/register.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      ctx.partial('/templates/common/main.hbs');
    });
  };

  const postRegister = (ctx) => {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPass = ctx.params.repeatPass;
    const email = ctx.params.email;
    const avatarUrl = ctx.params.avatarUrl;

    if (validateCredentials(username, password, repeatPass)) {
      userModel.register({
        username,
        password,
        email,
        avatarUrl
      })
        .done((data) => {
          storage.saveUser(data);
          notification.info('User registration successful.');
          ctx.redirect('#/');
        })
        .fail(notification.handleError);
    }
  };

  const getLogin = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/user/login.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      ctx.partial('/templates/common/main.hbs');
    });
  };

  const postLogin = (ctx) => {
    const username = ctx.params.username;
    const password = ctx.params.password;

    if (validateCredentials(username, password)) {
      userModel.login(username, password)
        .done((data) => {
          storage.saveUser(data);
          notification.info('Login successful.');
          ctx.redirect('#/');
        })
        .fail(notification.handleError);
    }
  };

  const logout = (ctx) => {
    userModel.logout()
      .done(() => {
        storage.clearUser();
        notification.info('Logout successful.');
        ctx.redirect('#/');
      })
      .fail(notification.handleError);
  };

  const profile = (ctx) => {
    const id = ctx.params.id;
    userModel.get(id)
      .done(userInfo => {
        userInfo.isAuthor = userInfo.username === ctx.username;
        ctx.user = userInfo;
        memeModel.getAllByUsername(userInfo.username)
          .done(data => {
            ctx.user.memes = data.map(meme => {
              meme.isAuthor = meme.creator === ctx.username;
              return meme;
            });
            ctx.loadPartials({
              header: '/templates/common/header.hbs',
              footer: '/templates/common/footer.hbs',
              section: '/templates/user/profile.hbs',
              userMeme: '/templates/meme/user-meme.hbs'
            }).then(function () {
              ctx.partials = this.partials;
              ctx.partial('/templates/common/main.hbs');
            });
          })
          .fail(notification.handleError);
      })
      .fail(notification.handleError);
  };

  const remove = (ctx) => {
    const id = ctx.params.id;
    userModel.remove(id)
      .done(() => {
        notification.info('User deleted.');
        storage.clearUser();
        ctx.redirect('#/');
      })
      .fail(notification.handleError);
  };

  return {
    getRegister,
    getLogin,
    postRegister,
    postLogin,
    logout,
    profile,
    remove
  };
})();