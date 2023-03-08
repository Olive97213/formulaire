const form = document.querySelector("form");
const lastName = document.querySelector("#last-name");
const firstName = document.querySelector("#first-name");
const ageInputValue = document.querySelector("#age");
const email = document.querySelector("#email");
const privateLink = document.querySelector("#privatelink");
const button = document.querySelector(".button");



form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (form.checkValidity()) {
      privateLink.style.pointerEvents = 'auto';
      privateLink.style.opacity = "100%";
    }
  });





  
