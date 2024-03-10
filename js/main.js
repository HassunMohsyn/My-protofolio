let Skill_card = document.querySelectorAll(".Skills .container .Skill-card");


let span = document.querySelectorAll(".Skills .container .Skill-card .progres span");
span.forEach( (span) => {
    span.style.backgroundColor = span.dataset.color;
    span.style.width = span.dataset.percent;
    
});

let h3 = document.querySelectorAll(".Skills .container .Skill-card h3");
h3.forEach( (h3) => {
    span.forEach( (span) => {

        // h3.innerHTML = span.dataset.percent;

    })
})


let menu_icon = document.querySelector(".cover .container .menu_icon");
let ul_ShoHid = document.querySelector(".cover .container header ul")
menu_icon.addEventListener('click' , () => {
    ul_ShoHid.classList.toggle("active");
});

let bottom_btn = document.querySelector(".bottom_btn");


// let body = document.querySelector("body .lay_out");

// body.onclick = function() {
//     ul_ShoHid.classList.remove("active");
// };