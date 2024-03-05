import { getCategories } from "./services/categories-service.js";
async function fetchCategories() {
  const categories = await getCategories();
  this.categories = categories;
}
const STORE = {
  user: null,
  categories: [],
  //   loginError: null,
  fetchCategories, //Se puede hacer para los async
};
export default STORE;
