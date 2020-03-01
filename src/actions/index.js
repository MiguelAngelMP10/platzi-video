/* eslint-disable import/prefer-default-export */

const setFavorite = (payload) => {
  return {
    type: 'SET_FAVORITE',
    payload,
  };
};

const deleteFavorite = (payload) => {
  return {
    type: 'DELETE_FAVORITE',
    payload,
  };
};
export { setFavorite, deleteFavorite };
