const user = (() => {
  const validateCredentials = (username, password, repeatPass) => {
    if (!/[A-Za-z]{3,}/.test(username)) {
      notification.error('Username should be at least 3 characters long and should contain only english alphabet letters');
      return false;
    }

    if (!/[A-Za-z0-9]{6,}/.test(password)) {
      notification.error('Password should be at least 6 characters long and should contain only english alphabet letters and digits.');
      return false;
    }

    if (repeatPass && password !== repeatPass) {
      notification.error('Passwords don\'t match.');
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
    const username = ctx.params.username.trim();
    const password = ctx.params.password.trim();
    const repeatPass = ctx.params.repeatPass.trim();
    if (validateCredentials(username, password, repeatPass)) {
      userModel.register({ username, password })
        .done((userInfo) => {
          storage.saveUser(userInfo);
          notification.info('User registration successfull.');
          ctx.redirect('#/all');
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
        .done((userInfo) => {
          storage.saveUser(userInfo);
          notification.info('Login successfull.');
          ctx.redirect('#/all');
        })
        .fail(notification.handleError);
    }
  };

  const logout = (ctx) => {
    userModel.logout()
      .done(() => {
        notification.info('Logout successful.');
        storage.clearUser();
        ctx.redirect('#/login');
      })
      .fail(notification.handleError);
  };

  return {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    logout,
  };
})();