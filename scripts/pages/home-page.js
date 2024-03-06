import STORE from "../store.js";

function listenNavigation() {
  const navigation = document.querySelector(".js-navigation");
  navigation.addEventListener("click", (event) => {
    event.preventDefault();
    const link = event.target.closest("[data-tab]");
    if (!link) return;
    console.log("LLegó Bitch");
    // console.log(event.target.dataset.tab); "event.target" puede tomar  "link"
    console.log(link.dataset.tab);
  });
}

function render() {
  console.log(STORE);
  return `
  <main class ="section">
     <section class ="container">
        <h3 class="heading heading--lg text-center mb-2">Expensable</h3>
        <div class="flex justify-between mb-8 js-navigation">
           <a href="#" class="button button--subtle js-nav-link" data-tab="expense">Expense</a> 
           <a href="#" class="button button--subtle js-nav-link" data-tab="income">Income</a>
           <a href="#" class="button button--subtle js-nav-link" data-tab="profile">Profile</a>
        </div>
     </section>
  <main>`;
}

const HomePage = {
  toString() {
    return render();
  },

  addListeners() {
    listenNavigation();
  },
};

export default HomePage;
