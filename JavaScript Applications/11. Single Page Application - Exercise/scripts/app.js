const startApp = (e) => {
  $('header').find('a[data-target]').on('click', view.navigateTo);
  $('#formLogin').on('submit', user.login);
  $('#formRegister').on('submit', user.register);
  $('#linkLogout').on('click', user.logout);
  $('#formCreateAd').on('submit', publication.create);
  $('.notification').on('click', () => $(e.target).fadeOut());
  
  // Edit and Remove give me CORS for some reason...

  view.show('viewHome');

  if (user.authtoken() !== null) {
    view.logged();
  } else {
    view.anonymous();
  }
};