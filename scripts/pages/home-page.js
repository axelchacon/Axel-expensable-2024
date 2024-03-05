import STORE from "../store.js";

function render() {
  console.log(STORE);
  return `<h1>Home Page</h1> <p>Esto es una frase</p>`;
}

const HomePage = {
  toString() {
    return render();
  },

  addListeners() {},
};

export default HomePage;
