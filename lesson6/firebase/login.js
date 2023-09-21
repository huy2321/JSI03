import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"

const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const loginbtn = document.getElementById('loginbtn');

const handleLogin = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = './index.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};
loginbtn.addEventListener("click",handleLogin);

