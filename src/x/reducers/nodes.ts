import { ADD_NODE, REMOVE_NODE, UPDATE_NODE } from "../actions";
import { omit } from "lodash";

const node = (state, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        x: action.x,
        y: action.y,
        component: action.component
      };
    case UPDATE_NODE:
      return {
        x: action.x,
        y: action.y,
        component: action.component
      };
    default:
      return state;
  }
};

const nodes = (state = {}, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...state,
        [action.id]: node(undefined, action)
      };
    case UPDATE_NODE:
      return {
        ...state,
        [action.id]: node(state[action.id], action)
      };
    case REMOVE_NODE:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default nodes;
