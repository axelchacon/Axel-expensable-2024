import STORE from "../store.js";

function render() {
  const categories = STORE.currentCategories();
  console.log(categories);
  return `
  <h2>Expenses components<h2>
  <ul>
  ${categories.map((category) => `<p>${category.name}</p>`).join("")}
  </ul>

  `;
}

const Expenses = {
  toString() {
    return render();
  },
  addListeners() {},
};
export default Expenses;
