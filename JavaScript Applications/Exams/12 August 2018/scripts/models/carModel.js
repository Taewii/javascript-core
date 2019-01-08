const carModel = (() => {
  const appKey = requester.appKey;

  const getOne = (id) => {
    return requester.get(`appdata/${appKey}/cars/${id}`);
  };

  const getAll = () => {
    return requester.get(`appdata/${appKey}/cars?query={}&sort={"_kmd.ect": -1}`);
  };

  const create = (data) => {
    return requester.post(`appdata/${appKey}/cars`, data);
  };

  const edit = (id, data) => {
    return requester.edit(`appdata/${appKey}/cars/${id}`, data);
  };

  const remove = (id) => {
    return requester.remove(`appdata/${appKey}/cars/${id}`);
  };

  return {
    getAll,
    getOne,
    create,
    edit,
    remove,
  };
})();