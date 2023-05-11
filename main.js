const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link"). forEach(n => n.addEventListener ("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

const testimonials = [
    {
        name: "Otho G",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
    {
        name: "Kathryn K",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
    {
        name: "Morten Q",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex.Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
    {
        name: "Ignace O",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
    {
        name: "Rick E",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
];

const textEl = document.querySelector(".text_testmonial");
const userNameEl = document.querySelector(".username")

let index = 0;

updateTestimonials()

 function updateTestimonials() {
    const {name, photoUrl, text} =
    testimonials[index];
    textEl.innerText = text;
    userNameEl.innerText = name;
    index++
    if(index === testimonials.length) {
        index = 0;
    }
    setTimeout(() =>{
        updateTestimonials()
    }, 4000)
 }

 const showcases = [
    {
        user: "Evenly Bola.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?"
    },
    {
        user: "Janet Shola.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?"
    },
    {
        user: "Jessey Z.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
    {
        user: "Kevin F.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
    {
        user: "Ruth Walter. J",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab libero laudantium odit molestiae id ex. Dolores veritatis eaque deserunt. Quam alias impedit consectetur vero veritatis numquam rerum. Animi itaque accusamus quis ducimus, illo ad eius! Maxime voluptatibus dolores libero, nobis illum deserunt maiores beatae ipsum voluptates ratione, rem at?",
    },
 ];

 const blogEl = document.querySelector(".text_user");
 const userEl = document.querySelector(".user");

 let idx = 0;

 updateShowCases()

 function updateShowCases() {
    const { user,  text} =
    showcases[idx];
    userEl.innerText = user;
    blogEl.innerText = text;
    idx++
    if(idx === showcases.length) {
        idx = 0;
    }
    setTimeout(() =>{
        updateShowCases()
    }, 4000)
 }