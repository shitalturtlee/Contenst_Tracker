
let dark = true;

function toggleTheme(){
    document.body.classList.toggle("light");
    let btn = document.querySelector(".theme-toggle");

    if(dark){
        btn.innerHTML="☀️";
        dark=false;
    }else{
        btn.innerHTML="🌙";
        dark=true;
    }
}

function nextPage(){
    alert("Proceeding to next page...");
}

/* Ask username on load */
window.onload = function(){
    let user = prompt("Enter your Username:");
    if(user && user.trim() !== ""){
        document.getElementById("username").innerText = user;
    }
}
