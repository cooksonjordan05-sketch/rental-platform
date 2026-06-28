// ===============================
// RentHome JavaScript
// ===============================

// Search Properties
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// ===============================
// View Details Button
// ===============================

const detailButtons = document.querySelectorAll(".card button");

detailButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Property Details page will be added in the next step.");

    });

});

// ===============================
// Register Button
// ===============================

const registerBtn = document.querySelector(".register-btn");

if(registerBtn){

registerBtn.onclick=function(){

alert("Register page coming soon.");

}

}

// ===============================
// Login Button
// ===============================

const loginBtn=document.querySelector(".login-btn");

if(loginBtn){

loginBtn.onclick=function(){

alert("Login page coming soon.");

}

}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

let href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("RentHome Loaded Successfully");
