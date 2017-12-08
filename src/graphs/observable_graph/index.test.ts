import ObservableGraph from "./index";
import { components, state } from "../test_fixtures";

it("has nodes", () => {
  const sg = new ObservableGraph(components);
  sg
    .addNode("add", "B1", { a: 10, b: 24 })
    .addNode("add", "C1", { a: "$B1", b: 10 });

  expect(sg).toBeTruthy();
});
