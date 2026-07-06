import { auth } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Register User
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registration Successful!");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Login User
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful!");
        window.location.href = "booking.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// Logout
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Logged Out Successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};