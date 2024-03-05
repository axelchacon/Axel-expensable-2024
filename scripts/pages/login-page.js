import { input } from "../components/input.js";
import DOMHandler from "../dom_handler.js";
import { login } from "../services/sessions-service.js";
import HomePage from "./home-page.js";
function render() {
  return `
  <main class="section">
    <section class="container">
      <h3 class="heading--lg text-center mb-4">Login</h3>
      <form class="flex flex-column gap-4 js-login-form">
        ${input({
          label: "email",
          id: "email",
          type: "email",
          placeholder: "axelchacon@mail.co",
          required: true,
          value: "axelchacon@mail.co",
        })}

        ${input({
          label: "password",
          id: "password",
          type: "password",
          placeholder: "********",
          required: true,
        })}
        <button class="button button--primary">Submit</button>
      </form>
    </section>
  </main>

  `;
}

function listenSubmitForm() {
  const form = document.querySelector(".js-login-form");
  form.addEventListener("submit", async (event) => {
    /////Paso 1//////
    // event.preventDefault();
    // // console.log(event.target.elements);
    // const { email, password } = event.target; // me permite captura lo que he llenado en formato objeto por lo que puede llavar sus propiedades con su valor.
    // const credentials = {
    //   email: email.value,
    //   password: password.value,
    // };
    // console.log(credentials); ///te devuele un objeto como "{email: 'axelchacon@mail.co', password: 'fdfdfd'}" cuando escribe en el login
    /////Paso 2//////
    try {
      event.preventDefault();
      const { email, password } = event.target; // me permite captura lo que he llenado en formato objeto por lo que puede llavar sus propiedades con su valor.
      const credentials = {
        email: email.value,
        password: password.value,
      };
      const user = await login(credentials);
      console.log(user);
      DOMHandler.load(HomePage);
    } catch (error) {
      console.log(error);
    }
  });
}
const LoginPage = {
  toString() {
    return render();
  },

  addListeners() {
    listenSubmitForm();
  },
};

export default LoginPage;

// toString() {
//   return `
//   <h3>Login</h3>
//   <main class="section">
//     <section class="container">
//       <h3>Login</h3>
//       <form>
//         ${input({
//           label: "email",
//           id: "email",
//           type: "email",
//         })}

//       </form>
//     </section>
//   </main>

//   `;
// },
