import "@babel/polyfill";
import { login, updateUser, updatePassword, signup } from "./login";
import { startGame } from "./game";
import { showMenu } from "./menu";

const PATH = "http://127.0.0.1:3000";
let gameStart = document.getElementById("gameStart");
let btnConnection = document.getElementById("btnConnection");
let btnInscription = document.getElementById("btnInscription");
let btnUpdate = document.getElementById("btnUpdate");
let btnUpdatePassword = document.getElementById("btnUpdatePassword");
let menuSection = document.getElementById("menu__section");
let menuNav = document.getElementById("menu__nav");

if (btnConnection) {
  btnConnection.addEventListener("click", (e) => {
    e.preventDefault();
    let idConnect = document.getElementById("idConnect").value;
    let password = document.getElementById("password").value;
    login(PATH, idConnect, password);
  });
}
if (btnInscription) {
  btnInscription.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.getElementById("Email").value;
    let pseudo = document.getElementById("pseudo").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    signup(PATH, pseudo, email, password, confirmPassword);
  });
}

if (btnUpdate) {
  btnUpdate.addEventListener("click", (e) => {
    document.getElementById("formSuccess").innerHTML = "";
    document.getElementById("formError").innerHTML = "";
    e.preventDefault();
    document.getElementById("formError").innerHTML = "";
    let email = document.getElementById("Email").value;
    let pseudo = document.getElementById("pseudo").value;
    const data = {
      email,
      pseudo,
    };
    updateUser(PATH, data);
  });
}
if (btnUpdatePassword) {
  btnUpdatePassword.addEventListener("click", (e) => {
    document.getElementById("formSuccess").innerHTML = "";
    document.getElementById("formError").innerHTML = "";
    e.preventDefault();
    document.getElementById("formError").innerHTML = "";
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (!password || password !== confirmPassword) {
      document.getElementById("formError").innerHTML =
        "les mots de passe saisis ne sont pas identiques";
    } else if (password.length < 6) {
      document.getElementById("formError").innerHTML =
        "le mot de passe doit avoir plus de 5 caractères";
    } else {
      const data = {
        password,
        confirmPassword,
      };
      updatePassword(PATH, data);
    }
  });
}

if (gameStart) {
  gameStart.addEventListener("click", () => {
    const category = document.getElementById("category").textContent;
    startGame(category);
  });
}
if (menuSection) {
  menuSection.addEventListener("click", () => {
    showMenu(PATH);
  });
}
