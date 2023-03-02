
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const message = document.querySelector('#message');
const messageError = document.querySelector('#messageError');
const messageForm = document.querySelector('#message-form');

const validateEmail = () => {
    const emailValue = email.value.trim();
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    emailError.innerText = "";

    if( !emailValue ) {
        emailError.innerText = '*Email is required*';
    } 
    else if( !emailValidator.test(emailValue) ) {
        emailError.innerText = '*Please enter a valid email*';
    }


    
}
const validateMessage = () => {
    const messageValue = message.value;
    messageError.innerText = "";

    if( !messageValue ) {
        messageError.innerText = '*Message is required*';
    } 

}

function sendMail(){
    let params = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


const serviceID = "service_iouxf7u";
const templateID = "template_sv26l7j";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert(`Your message sent succesfully`);
    }
)
.catch((err) => console.log(error));
}

messageForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();


        validateEmail();
        validateMessage();
       
        // messageForm.reset();
        if ( messageError.innerText === "" && emailError.innerText === ""){
            sendMail();
            
        }
    }
)