export const components = {
  add: {
    fn: (a, b) => a + b,
    inputs: {
      a: "number",
      b: "number",
      "c?": "number"
    }
  }
};
