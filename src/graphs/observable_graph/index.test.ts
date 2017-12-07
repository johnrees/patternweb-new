import ObservableGraph from "./index";
import { components, state } from "../test_fixtures";

it("has nodes", () => {
  const sg = new ObservableGraph(components);
  sg
    .addNode("add", "add1", { a: 2, b: 1 })
    .addNode("add", "add2", { a: "$add1", b: 10 });

  expect(sg).toBeTruthy();
});
