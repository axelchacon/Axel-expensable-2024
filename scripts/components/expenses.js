import DOMHandler from "../dom_handler.js";
import { deleteCategory } from "../services/categories-service.js";
import STORE from "../store.js";

function calcTotal(transactions) {
  // console.log(transactions);
  ///Forma 1//////
  // let total = 0;
  // transactions.forEach((transaction) => {
  //   total += transaction.amount;
  // });
  // return total;
  ///Forma 2/////
  ////category.transactions = array de objetos= [{id: 2561, amount: 2500, date: '2024-09-23', notes: 'Air Jorda}, ......]
  return transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  ); ///Total toma el valor de cero
}
function listenDelete() {
  const ul = document.querySelector(".js-category-list");
  ul.addEventListener("click", async (event) => {
    try {
      event.preventDefault();
      const deleteLink = event.target.closest("[data-id]");
      if (!deleteLink) return;
      const id = deleteLink.dataset.id;
      console.log(id);
      ///Llamando a la API
      await deleteCategory(id); /// esto es del archivo categories-service.js y es una promesa
      ///ELiminar de nuestro STORE
      STORE.deleteCategory(id);
      //Reload
      DOMHandler.reload();
    } catch (error) {
      console.log(error);
    }
  });
}

function renderCategory(category) {
  return `
  <li class= "flex gap-4 justify-between" style="border:1px solid black">
  <p>${category.name}</p>
  <p>${calcTotal(category.transactions)}</p>
  <a href="#" data-id=${category.id}>Delete</a>
  </li>
  `;
}

function render() {
  const categories = STORE.currentCategories();
  console.log(categories);
  return `
  <h2>${STORE.currentTab === "expense" ? "Expenses" : "Incomes"}<h2>
  <ul class="js-category-list">
  ${categories.map(renderCategory).join("")}
  </ul>

  `;
}

const Expenses = {
  toString() {
    return render();
  },
  addListeners() {
    listenDelete();
  },
};
export default Expenses;
