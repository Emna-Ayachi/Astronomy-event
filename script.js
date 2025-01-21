// creating an array of buttons
let buttons = document.querySelectorAll(".btn");
// creating an array for answers
let answers = document.querySelectorAll(".answer")
// creating an array of tags aka + and - 's
let tags = document.querySelectorAll('.tags');
console.log(tags);

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
function toggleMenu() {
    const contacts = document.querySelector('.contacts');
    contacts.classList.toggle('active');
}
