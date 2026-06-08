// Funktion + Event Listener

const welcomeBtn = document.getElementById("welcomeBtn");

if(welcomeBtn){

welcomeBtn.addEventListener("click", function(){

document.getElementById("message").textContent =
"Välkommen till min portfolio!";

});

}

// Formulärvalidering

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){

document.getElementById("result").textContent =
"Fyll i alla fält!";

}else{

document.getElementById("result").textContent =
"Meddelandet skickades!";

}

});

}

// Loop

const skills = [
"HTML",
"CSS",
"JavaScript"
];

for(let i = 0; i < skills.length; i++){

console.log(skills[i]);

}