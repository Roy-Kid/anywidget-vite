const l = {
  initialize({ model: e }) {
    e.on("change:value", () => console.log(e.get("value")));
  },
  render({ model: e, el: n }) {
    consolo.log("Hello!"), e.on("change:value", () => n.innerText = e.get("value"));
  }
};
export {
  l as default
};
