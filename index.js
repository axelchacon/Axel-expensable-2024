///Se avanzó el uso de la api nomás y se verificó su funcionameinto correcto. Sí funciona
///Por parte de Axel, se comenzó el 24/02/2024. Van 2 días.
import { login, logout } from "./scripts/services/sessions-service.js";
// Forma 1 para capturar al  error, no se recomienda porque no es tan flexible///////

// login({ email: "axelchacon@mail.co", password: "123456" })
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));

// Forma 2 para capturar al  error,  se recomienda porque es flexible///////
const credentials = { email: "axelchacon@mail.co", password: "123456" };
async function test() {
  try {
    const user = await login(credentials);
    console.log(user);
    const message = await logout();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
test();
// Temrinado la 2 hora///////
