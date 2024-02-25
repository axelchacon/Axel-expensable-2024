///Se avanzó el uso de la api nomás y se verificó su funcionameinto correcto. Sí funciona
///Por parte de Axel, se comenzó el 24/02/2024. Van 2 días.
import { login } from "./scripts/services/sessions-service.js";
// Forma 1 para capturar al  error, no se recomienda porque no es tan flexible///////
// login({ email: "axelchacon@mail.co", password: "123456" })
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));
// Forma 2 para capturar al  error,  se recomienda porque es flexible///////
const credentials = { email: "axelchacon@mail.co", password: "1234566" };
async function test() {
  try {
    const user = await login(credentials);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
test();
