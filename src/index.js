export default {
    initialize({ model }) {
      model.on("change:value", () => console.log(model.get("value")));
    },
    render({ model, el }) {
        consolo.log("Hello!");
      model.on("change:value", () => el.innerText = model.get("value"))
    }
  }