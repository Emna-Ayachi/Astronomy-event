// creating an array of buttons
let buttons = document.querySelectorAll(".btn");
// creating an array for answers
let answers = document.querySelectorAll(".answer")
// creating an array of tags aka + and - 's
let tags = document.querySelectorAll('.tags');

// creating an objected containing as key the button and as a value the answer
let obj = {"q1":[answers[0] , tags[0]] , "q2":[answers[1] , tags[1]], "q3":[answers[2] , tags[2]],"q4":[answers[3] , tags[3]],"q5":[answers[4] , tags[4]]};

buttons.forEach((btn) => {
    btn.addEventListener('click' , () => {
        if(obj[btn.id][0].getAttribute('dropped') === "false"){
            obj[btn.id][0].style.maxHeight='100px';
            obj[btn.id][1].textContent='-';
            obj[btn.id][0].setAttribute('dropped' , 'true');
        }else{
            obj[btn.id][0].style.maxHeight='0px';
            obj[btn.id][1].textContent='+';
            obj[btn.id][0].setAttribute('dropped', 'false');
        }
    })
})
const contacts = document.querySelector('.contacts');
const elements = document.querySelectorAll('.contacts li');
    elements.forEach(element =>{
        element.addEventListener('click' , () => {
           
            contacts.classList.remove('active');
        })
    })
function toggleMenu() {
    contacts.classList.toggle('active');  
}
// defining the logic behind the animation
const options = {threshold : 0.3};
// 1) cards animation
const cards = document.querySelectorAll('.card');
let cardsObserver = new IntersectionObserver((entries , observer) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("appearX");
        }
    })
} , options)
cards.forEach(card => {
    cardsObserver.observe(card);
});
// 2) for the registration form
const registration_Faqs = document.querySelectorAll('.hide');
let registration_FaqsObserver = new IntersectionObserver((entries , observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("appearY");
        }
    })
} , options)
registration_Faqs.forEach(element => {
    registration_FaqsObserver.observe(element);
})

// cards animation
let cardsInner = document.querySelectorAll('.card-inner');
cardsInner.forEach(card => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();

        if (card.classList.contains("notrotated")) {
            card.classList.replace("notrotated", "rotated");
        } else {
            card.classList.replace("rotated", "notrotated");
        }
    });
});

let section = document.querySelector("body");
section.addEventListener('click', () => {
    cardsInner.forEach(card => {
        card.classList.replace("rotated", "notrotated");
    });
});
