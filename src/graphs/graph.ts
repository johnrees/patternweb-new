import * as Rx from "rxjs";

class Graph {
  constructor(protected components) {}

  addNode(key, id, args): this {
    throw new Error("not implemented");
  }

  removeNode(id): this {
    throw new Error("not implemented");
  }

  updateNode(id, args, run = false): this {
    throw new Error("not implemented");
  }

  run(id, exists = false): this {
    throw new Error("not implemented");
  }
}

export default Graph;
