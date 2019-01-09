const userModel = (() => {
  const appKey = requester.appKey;

  const register = (data) => {
    return requester.post(`user/${appKey}`, data);
  };

  const login = (username, password) => {
    return requester.post(`user/${appKey}/login`, { username, password });
  };

  const logout = () => {
    return requester.post(`user/${appKey}/_logout`);
  };

  const get = (id) => {
    return requester.get(`user/${appKey}/${id}`);
  };

  const remove = (id) => {
    return requester.remove(`user/${appKey}/${id}`);
  };

  return {
    register,
    login,
    logout,
    get,
    remove,
  };
})();