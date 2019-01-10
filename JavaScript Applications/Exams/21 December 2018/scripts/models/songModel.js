const songModel = (() => {
  const appKey = requester.appKey;

  const create = (data) => {
    return requester.post(`appdata/${appKey}/songs`, data);
  };

  const getAll = (userId) => {
    return requester.get(`appdata/${appKey}/songs?query={"$nor":[{"_acl.creator":"${userId}"}]}&sort={"likes": -1}`);
  };

  const getAllByCategory = (category) => {
    return requester.get(`appdata/${appKey}/songs?query={"category":"${category}"}&sort={"likes": -1}`);
  };

  const mine = (userId) => {
    return requester.get(`appdata/${appKey}/songs?query={"_acl.creator":"${userId}"}&sort={"likes": -1, "listened": -1}`);
  };

  const get = (id) => {
    return requester.get(`appdata/${appKey}/songs/${id}`);
  };

  const edit = (id, data) => {
    return requester.edit(`appdata/${appKey}/songs/${id}`, data);
  };

  const remove = (id) => {
    return requester.remove(`appdata/${appKey}/songs/${id}`);
  };

  return {
    create,
    getAll,
    getAllByCategory,
    mine,
    get,
    edit,
    remove,
  };
})();