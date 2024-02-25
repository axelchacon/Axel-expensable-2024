const BASE_URI = "https://expensable-api.herokuapp.com";
const tokenKey = "expensable_key";

async function login(credentials = { email, password }) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //Paso2
  const user = await response.json();
  //Paso3
  sessionStorage.setItem(tokenKey, user.token); //sessionStorage.setItem es un método en Javascript que envía la información dada dentro del sessionStorage gracias a lsetItem. (sessionStorage.setItem(nombre que va atomar el valor dentro del sessionStorage y puede ser cualquier nombre en string , user.token es el valor que va a tomar ese nombre))
  //sessionStorage.setItem además nos permite guardarlo durante el tiempo y usarlo para llamarlo a cada rato como variable
  return user;
  //Paso1
  // console.log(response);
}
export { login };
