import * as Rx from "rxjs";
import Graph from "../graph";

class ObservableGraph extends Graph {
  addNode(key, id, args): this {
    console.log(this.components[key], { key, id, args });
    // console.log(this.components, key);
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
