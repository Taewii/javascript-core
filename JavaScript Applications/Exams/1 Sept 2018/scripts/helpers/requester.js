const requester = (() => {
  const baseUrl = 'https://baas.kinvey.com/';
  const appKey = 'kid_HyzDXdXMN';
  const appSecret = '7a34011441d34f71bfa41e81c326c409';

  const header = () => {
    const authorization = storage.isAuthenticated()
      ? `Kinvey ${storage.authToken()}`
      : `Basic ${btoa(appKey + ':' + appSecret)}`;
    return {
      Authorization: authorization
    };
  };

  const call = function (method, url, data) {
    url = baseUrl + url;
    data = data || {};

    return $.ajax({
      method,
      url,
      data,
      headers: header(),
    });
  };

  const get = function (url) {
    return call('GET', url);
  };

  const post = function (url, data) {
    return call('POST', url, data);
  };

  const edit = function (url, data) {
    return call('PUT', url, data);
  };

  const remove = function (url, data) {
    return call('DELETE', url, data);
  };

  return {
    get,
    post,
    edit,
    remove,
    appKey
  };
})();