import { getCategories } from "./services/categories-service.js";
async function fetchCategories() {
  const categories = await getCategories();
  // this.categories = categories;
  this.income = categories.filter(
    (category) => category.transaction_type === "income"
  );
  this.expense = categories.filter(
    (category) => category.transaction_type === "expense"
  );
}

function currentCategories() {
  ///////Forma1/////
  // if (this.currentTab === "expense") {
  //   return this["expense"];
  //   // return this.expense;
  // } else if (this.currentTab === "income") {
  //   return this["income"];
  //   // return this.income;
  // }
  ///////Forma2/////
  return this[this.currentTab];
}

const STORE = {
  user: null,
  // categories: [],
  income: [],
  expense: [],
  currentTab: "expense",
  //   loginError: null,
  fetchCategories, //Se puede hacer para los async
  currentCategories,
};
export default STORE;
