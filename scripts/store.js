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
const STORE = {
  user: null,
  // categories: [],
  income: [],
  expense: [],
  currentTab: "expense",
  //   loginError: null,
  fetchCategories, //Se puede hacer para los async
};
export default STORE;
