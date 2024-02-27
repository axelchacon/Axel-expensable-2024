const BASE_URI = "https://expensable-api.herokuapp.com";
const tokenKey = "expensable_key";

async function login(credentials = { email, password }) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      // forma 1/////
      "Content-Type": "application/json",
      // forma 2/////
      // Authorization: `Token token=${false}`,
      // "Content-Type": "application/json",
    },
  });
  //Paso2///////////////
  const data = await response.json();
  //Paso4/////////////// cambiamos user por data, esta función if es para que capture el error y este sirve para hacer dos formas de error mostradas en el archivo sessions-srvices.js
  if (!response.ok) {
    throw new Error(data.errors);
  }
  //Paso3///////////////
  sessionStorage.setItem(tokenKey, data.token); //sessionStorage.setItem es un método en Javascript que envía la información dada dentro del sessionStorage gracias a lsetItem. (sessionStorage.setItem(nombre que va atomar el valor dentro del sessionStorage y puede ser cualquier nombre en string , user.token es el valor que va a tomar ese nombre))
  //sessionStorage.setItem además nos permite guardarlo durante el tiempo y usarlo para llamarlo a cada rato como variable
  return data;
  //Paso1///////////////
  // console.log(response);
}
export { login };
