import { idMaker } from "../../patterns/core/id";

const nodeID = idMaker("node");

export const ADD_NODE = "ADD_NODE";
export const ADD_EDGE = "ADD_EDGE";

export const addNode = (x, y) => {
  return {
    type: ADD_NODE,
    id: nodeID.next().value,
    x,
    y
  };
};
