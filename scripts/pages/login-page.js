import { input } from "../components/input.js";
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
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");
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
