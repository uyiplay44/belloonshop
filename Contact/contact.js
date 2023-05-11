
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

///animation/////
AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
  });

//// target the form element////
const form = document.querySelector("form");

////target the input element/////
const nameInput = document.querySelector('input[name="name"]');

////success message tag////
const thankYou = document.querySelector(".thank_you");

const inputFields = () =>{
  inputFields.forEach
}

/////email input section/////
const emailInput = document.querySelector('input[name="email"]');

////phone input section////
const phoneInput = document.querySelector('input[name="phone"]');

////message input sction
const messageInput = document.querySelector('textarea[name="message"]');


const inputs = [nameInput, emailInput, phoneInput, messageInput];

///Boolan//////
let isFormValid = false;
let isvalidationOn = false;



const resetElm = (elm) =>{
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const invalidateElm = (elm) =>{
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};


////validation sign//////
const validateInputs = () => {
  if (!isvalidationOn) return;
  isFormValid = true;
  inputs.forEach(resetElm)

  if (!nameInput.value) {
    isFormValid = false;
    invalidateElm(nameInput);
  }

  if (!isValidEmail (emailInput.value)) {
    isFormValid = false;
    invalidateElm(emailInput);
  }
  if (!isValidPhone (phoneInput.value)) {
    isFormValid = false;
    invalidateElm(phoneInput);
  }
  if (!messageInput.value) {
    isFormValid = false;
    invalidateElm(messageInput);
  }
};

const serviceID = "service_ec76x1b";
const templateID ="template_o780pyg";

emailjs.send(serviceID, templateID)
.then(
    res =>{
        document.querySelector('input[name="name"]');
        document.querySelector('input[name="phone"]');
        document.querySelector('textarea[name="message"]');
        console.log(res);
    }
);

///click on the button not to refresh browser/////
////add the success message here/////
form.addEventListener("submit", (e) =>{
e.preventDefault();
isvalidationOn = true;
validateInputs();
if (isFormValid) {  
  form.remove()
  ///form remove show success message///
  thankYou.classList.remove("hidden");
}
});

inputs.forEach(input => {
  nameInput.addEventListener("input", () =>{
  validateInputs();
});
});

///email send////
