
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE': {
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) {
        alert(`El video ${exist.title} ya existe en tu lista`);
      } else {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
    }
    // eslint-disable-next-line no-fallthrough
    case 'DELETE_FAVORITE': {
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    }
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'LOGOUT_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'REGISTER_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }

};

export default reducer;
