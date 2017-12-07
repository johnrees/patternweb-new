import * as Rx from "rxjs";

class ObservableGraph {
  constructor(private components) {}
  addNode(key, id, args): this {
    console.log(this.components, key);
    return this;
  }
  removeNode(id): this {
    return this;
  }
  updateNode(id, args, run = false): this {
    return this;
  }
  run(id, exists = false): this {
    return this;
  }
}

export default ObservableGraph;
