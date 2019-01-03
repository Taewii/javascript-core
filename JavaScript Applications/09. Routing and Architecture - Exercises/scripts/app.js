$(() => {
  const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('/index.html', viewHome);
    this.get('#/home', viewHome);
    this.get('#/about', viewAbout);
    this.get('#/register', viewRegister);
    this.get('#/login', viewLogin);
    this.post('#/register', register);
    this.post('#/login', login);
    this.get('#/logout', logout);
    this.get('#/catalog', viewCatalog);
    this.get('#/create', createTeamView);
    this.post('#/create', registerTeam);
    this.get('#/catalog/:id', viewTeam);
    this.get('#/edit/:id', viewEditTeam);
    this.post('#/edit/:id', editTeam);
    this.get('#/leave', leaveTeam);
    this.get('#/join/:id', joinTeam);

    const isAuthContext = (ctx) => {
      ctx.loggedIn = !!sessionStorage.getItem('authtoken');
      ctx.username = sessionStorage.getItem('username');
      ctx.teamId = sessionStorage.getItem('teamId');
      ctx.hasTeam = ctx.teamId !== 'undefined';
    };

    function joinTeam(ctx) {
      const teamId = ctx.params.id.substr(1);
      teamsService.joinTeam(teamId)
        .then(function (res) {
          auth.saveSession(res);
          auth.showInfo('You have joined the team.');
          ctx.redirect(`#/catalog/:${teamId}`);
        })
        .catch(auth.handleError);
    }

    function leaveTeam(ctx) {
      const teamId = sessionStorage.getItem('teamId');
      teamsService.leaveTeam()
        .then(function (res) {
          auth.saveSession(res);
          auth.showInfo('You have left the team.');
          ctx.redirect(`#/catalog/:${teamId}`);
        })
        .catch(auth.handleError);
    }

    function editTeam(ctx) {
      const teamId = ctx.params.id.substr(1);
      const name = ctx.params.name;
      const description = ctx.params.comment;

      teamsService.edit(teamId, name, description)
        .then(function () {
          auth.showInfo(`${name} has been edited.`);
          ctx.redirect(`#/catalog/:${teamId}`);
        })
        .catch(auth.handleError);
    }

    function viewEditTeam(ctx) {
      isAuthContext(ctx);
      ctx.teamId = ctx.params.id.substr(1);
      teamsService.loadTeamDetails(ctx.teamId)
        .then(function (teamInfo) {
          ctx.name = teamInfo.name;
          ctx.comment = teamInfo.comment;
          ctx.loadPartials({
            header: '/templates/common/header.hbs',
            footer: '/templates/common/footer.hbs',
            editForm: '/templates/edit/editForm.hbs'
          }).then(function () {
            this.partial('/templates/edit/editPage.hbs');
          });
        })
        .catch(auth.handleError);
    }

    function viewTeam(ctx) {
      const teamId = ctx.params.id.substr(1);
      teamsService.loadTeamDetails(teamId)
        .then(function (teamInfo) {
          isAuthContext(ctx);
          // ctx.members = usersInfo;
          ctx.name = teamInfo.name;
          ctx.teamId = teamId;
          ctx.comment = teamInfo.comment;
          ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');
          ctx.isOnTeam = teamInfo._id === sessionStorage.getItem('teamId');

          ctx.loadPartials({
            header: '/templates/common/header.hbs',
            footer: '/templates/common/footer.hbs',
            teamMember: '/templates/catalog/teamMember.hbs',
            teamControls: '/templates/catalog/teamControls.hbs'
          }).then(function () {
            this.partial('/templates/catalog/details.hbs');
          });
        })
        .catch(auth.handleError);
    }

    function registerTeam(ctx) {
      const name = ctx.params.name;
      const description = ctx.params.comment;

      teamsService.createTeam(name, description)
        .then(function (teamInfo) {
          teamsService.joinTeam(teamInfo._id)
            .then((data) => {
              auth.saveSession(data);
              auth.showInfo(`Team ${name} created.`);
              ctx.redirect(`#/catalog/:${teamInfo._id}`);
            });
        })
        .catch(auth.handleError);
    }

    function createTeamView(ctx) {
      isAuthContext(ctx);
      ctx.loadPartials({
        header: '/templates/common/header.hbs',
        footer: '/templates/common/footer.hbs',
        createForm: '/templates/create/createForm.hbs'
      }).then(function () {
        this.partial('/templates/create/createPage.hbs');
      });
    }

    function viewCatalog(ctx) {
      teamsService.loadTeams()
        .then(function (data) {
          isAuthContext(ctx);
          ctx.hasNoTeam = !ctx.hasTeam;
          ctx.teams = data;
          ctx.loadPartials({
            header: '/templates/common/header.hbs',
            footer: '/templates/common/footer.hbs',
            team: '/templates/catalog/team.hbs'
          }).then(function () {
            this.partial('/templates/catalog/teamCatalog.hbs');
          });
        })
        .catch(auth.handleError);
    }

    function logout(ctx) {
      auth.logout()
        .then(function () {
          sessionStorage.clear();
          auth.showInfo('Logged out.');
          viewHome(ctx);
        })
        .catch(auth.handleError);
    }

    function login(ctx) {
      const username = ctx.params.username;
      const password = ctx.params.password;

      auth.login(username, password)
        .then(function (userInfo) {
          auth.saveSession(userInfo);
          auth.showInfo(`${username} successfully logged in.`);
          viewHome(ctx);
        })
        .catch(auth.handleError);
    }

    function register(ctx) {
      const username = ctx.params.username;
      const password = ctx.params.password;
      const repeatPassword = ctx.params.repeatPassword;

      auth.register(username, password, repeatPassword)
        .then(function (userInfo) {
          auth.saveSession(userInfo);
          auth.showInfo(`Successfully registered ${username}`);
          viewHome(ctx);
        })
        .catch(auth.handleError);
    }

    function viewLogin(ctx) {
      isAuthContext(ctx);
      ctx.loadPartials({
        header: '/templates/common/header.hbs',
        footer: '/templates/common/footer.hbs',
        loginForm: '/templates/login/loginForm.hbs'
      }).then(function () {
        this.partial('/templates/login/loginPage.hbs');
      });
    }

    function viewRegister(ctx) {
      isAuthContext(ctx);
      ctx.loadPartials({
        header: '/templates/common/header.hbs',
        footer: '/templates/common/footer.hbs',
        registerForm: '/templates/register/registerForm.hbs'
      }).then(function () {
        this.partial('/templates/register/registerPage.hbs');
      });
    }

    function viewAbout(ctx) {
      isAuthContext(ctx);
      ctx.loadPartials({
        header: '/templates/common/header.hbs',
        footer: '/templates/common/footer.hbs'
      }).then(function () {
        this.partial('/templates/about/about.hbs');
      });
    }

    function viewHome(ctx) {
      isAuthContext(ctx);
      ctx.loadPartials({
        header: '/templates/common/header.hbs',
        footer: '/templates/common/footer.hbs'
      }).then(function () {
        this.partial('/templates/home/home.hbs');
      });
    }
  });

  app.run();
});