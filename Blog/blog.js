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
        photoUrl: "https://images.pexels.com/photos/1367278/pexels-photo-1367278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "Nice work on your Glamorous space balloon decorator. I have gotten at least 50 times the value from Glamorous space balloon decorator. ",
    },
    {
        name: "Kathryn K",
        photoUrl: "https://images.pexels.com/photos/1996007/pexels-photo-1996007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "Glamorous space balloon decorator is the next killer app. Wow what great service, I love it! I STRONGLY recommend Glamorous space balloon decorator to EVERYONE interested.",
    },
    {
        name: "Morten Q",
        photoUrl: "https://images.pexels.com/photos/3746276/pexels-photo-3746276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "Glamorous space balloon decorator impressed me on multiple levels. Glamorous space balloon decorator is the most valuable business resource we have EVER purchased. The very best.",
    },
    {
        name: "Ignace O",
        photoUrl: "https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "I don't always clop, but when I do, it's because of Glamorous space balloon decorator. If you want real marketing that works and effective implementation.",
    },
    {
        name: "Rick E",
        photoUrl: "https://images.unsplash.com/photo-1586233828056-5d4c18bcf9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        text: "I don't always clop, but when I do, it's because of Glamorous space balloon decorator. If you want real marketing that works and effective implementation - Glamorous space balloon decorator's got you covered.",
    },
];

const soucrceEl = document.querySelector(".source");
const textEl = document.querySelector(".text_testmonial");
const userNameEl = document.querySelector(".username")

let index = 0;

updateTestimonials()

 function updateTestimonials() {
    const {name, photoUrl, text} =
    testimonials[index];
    soucrceEl.src = photoUrl;
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
        photoUrl: "https://images.pexels.com/photos/1769467/pexels-photo-1769467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "We have no regrets! Glamorous space balloon decorator is exactly what our business has been lacking."
    },
    {
        user: "Janet Shola.",
        photoUrl: "https://images.pexels.com/photos/8335753/pexels-photo-8335753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "We have no regrets! Glamorous space balloon decorator is exactly what our business has been lacking."
    },
    {
        user: "Jessey Z.",
        photoUrl: "https://images.pexels.com/photos/3189023/pexels-photo-3189023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "I couldn't have asked for more than this. Really good. It's all good. Definitely worth the investment.",
    },
    {
        user: "Kevin F.",
        photoUrl: "https://images.pexels.com/photos/5089386/pexels-photo-5089386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "Needless to say we are extremely satisfied with the results. Nice work on your Glamorous space balloon decorator. I could probably go into sales for you.",
    },
    {
        user: "Ruth Walter. J",
        photoUrl: "https://images.pexels.com/photos/2997544/pexels-photo-2997544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "I use Glamorous space balloon decorator often.",
    },
 ];

 const spaceEl = document.querySelector(".space");
 const blogEl = document.querySelector(".text_user");
 const userEl = document.querySelector(".user");

 let idx = 0;

 updateShowCases()

 function updateShowCases() {
    const {user, photoUrl, text} =
    showcases[idx];
    spaceEl.src = photoUrl;
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