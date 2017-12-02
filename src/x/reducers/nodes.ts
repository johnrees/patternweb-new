import { ADD_NODE } from "../actions";

const nodes = (state = {}, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...state,
        [action.id]: {
          x: action.x,
          y: action.y
        }
      };
    default:
      return state;
  }
};

export default nodes;
