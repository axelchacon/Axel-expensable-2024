import { input } from "../components/input";
const LoginPage = {
  toString() {
    return `
    <h3>Login</h3>
  
    `;
  },

  addListeners() {},
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
