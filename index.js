import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom_handler.js";
import LoginPage from "./scripts/pages/login-page.js";
import HomePage from "./scripts/pages/home-page.js";
import { login } from "./scripts/services/sessions-service.js";
import { getUser } from "./scripts/services/user-service.js";
import STORE from "./scripts/store.js";
// DOMHandler.load(HomePage);

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    // const token = null;
    if (!token) return DOMHandler.load(LoginPage);
    //Home//////
    const user = await getUser();
    console.log(user);
    STORE.user = user;
    await STORE.fetchCategories();
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
  }
}
// login({ email: "axelchacon@mail.co", password: "123456" });
init();
