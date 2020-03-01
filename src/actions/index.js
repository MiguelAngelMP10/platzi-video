/* eslint-disable import/prefer-default-export */

const setFavorite = (payload) => {
  return {
    type: 'SET_FAVORITE',
    payload,
  };
};
export { setFavorite };
