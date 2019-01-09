const memeModel = (() => {
  const appKey = requester.appKey;

  const getAll = () => {
    return requester.get(`appdata/${appKey}/memes?query={}&sort={"_kmd.ect": -1}`);
  };

  const getAllByUsername = (username) => {
    return requester.get(`appdata/${appKey}/memes?query={"creator":"${username}"}&sort={"_kmd.ect": -1}`);
  };

  const create = (data) => {
    return requester.post(`appdata/${appKey}/memes`, data);
  };

  const get = (id) => {
    return requester.get(`appdata/${appKey}/memes/${id}`);
  };

  const edit = (id, data) => {
    return requester.edit(`appdata/${appKey}/memes/${id}`, data);
  };

  const remove = (id) => {
    return requester.remove(`appdata/${appKey}/memes/${id}`);
  };

  return {
    getAll,
    create,
    get,
    edit,
    remove,
    getAllByUsername,
  };
})();