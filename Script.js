let dark=true;

function toggleTheme(){
    document.body.classList.toggle("light");
    let btn=document.querySelector(".theme-toggle");

    if(dark){
        btn.innerHTML="☀️";
        dark=false;
    }else{
        btn.innerHTML="🌙";
        dark=true;
    }
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    // Clear previous error
    error.textContent = "";

    // Validation
    if (username === "" || email === "" || password === "") {
        error.textContent = "All fields are required!";
        return;
}});

  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAqH1e_RoyKi0dcnCYtFf6jwYlIiknlBqA",
    authDomain: "contest-tracker-e4ee7.firebaseapp.com",
    projectId: "contest-tracker-e4ee7",
    storageBucket: "contest-tracker-e4ee7.firebasestorage.app",
    messagingSenderId: "435513156271",
    appId: "1:435513156271:web:1ec278de1515136ccaea5a",
    measurementId: "G-VX0V65RKKV"
  };
 const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


