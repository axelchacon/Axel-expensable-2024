///Se avanzó el uso de la api nomás y se verificó su funcionameinto correcto. Sí funciona
///Por parte de Axel, se comenzó el 24/02/2024. Van 2 días.
import { login } from "./scripts/services/sessions-service.js";

login({ email: "axelchacon@mail.co", password: "123456" })
  .then((user) => console.log(user))
  .catch((error) => console.log(error));
console.log("Hola");
