import chevronDown from "../assets/svg/chevron-down.svg";


document.querySelectorAll(".faq-question img")
    .forEach(icon => {

        icon.src = chevronDown;

    });


document.querySelectorAll(".faq-question")
.forEach(button=>{

    button.addEventListener("click",()=>{

        button.parentElement.classList.toggle("active");

    });

});