const petModel = (() => {
  const appKey = requester.appKey;

  const create = (data) => {
    return requester.post(`appdata/${appKey}/pets`, data);
  };

  const getAll = () => {
    return requester.get(`appdata/${appKey}/pets?query={}&sort={"likes": -1}`);
  };

  const getAllByCategory = (category) => {
    return requester.get(`appdata/${appKey}/pets?query={"category":"${category}"}&sort={"likes": -1}`);
  };

  const mine = (userId) => {
    return requester.get(`appdata/${appKey}/pets?query={"_acl.creator":"${userId}"}`);
  };

  const get = (id) => {
    return requester.get(`appdata/${appKey}/pets/${id}`);
  };

  const edit = (id, data) => {
    return requester.edit(`appdata/${appKey}/pets/${id}`, data);
  };

  const remove = (id) => {
    return requester.remove(`appdata/${appKey}/pets/${id}`);
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