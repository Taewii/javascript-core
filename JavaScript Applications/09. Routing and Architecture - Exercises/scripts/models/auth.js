const auth = (() => {
  function saveSession(userInfo) {
    const userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authtoken', userAuth);
    const userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    const username = userInfo.username;
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('teamId', userInfo.teamId);
  }

  // user/login
  function login(username, password) {
    const userData = {
      username,
      password
    };

    return requester.post('user', 'login', 'basic', userData);
  }

  // user/register
  function register(username, password) {
    const userData = {
      username,
      password
    };

    return requester.post('user', '', 'basic', userData);
  }

  // user/logout
  function logout() {
    const logoutData = {
      authtoken: sessionStorage.getItem('authtoken')
    };

    return requester.post('user', '_logout', 'kinvey', logoutData);
  }

  function handleError(reason) {
    showError(reason.responseJSON.description);
  }

  function showInfo(message) {
    const infoBox = $('#infoBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(() => infoBox.fadeOut(), 3000);
  }

  function showError(message) {
    const errorBox = $('#errorBox');
    errorBox.text(message);
    errorBox.show();
    setTimeout(() => errorBox.fadeOut(), 3000);
  }

  return {
    login,
    register,
    logout,
    saveSession,
    showInfo,
    showError,
    handleError
  };
})();