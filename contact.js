//listen of a submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);
function submitForm(e) {
    e.preventDefault();
    //get input values
    let name=document.querySelector(".name").value;
    let email=document.querySelector(".email").value;
    let message=document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(name,email,message);
}
//send email info
function sendEmail(name,email,message) {
    Email.send({
        Host:"smtp.gmail.com",
        Username:'shafique.sara1400@gmail.com',
        Password:"rwaytrolrbuxsqla",
        To:'shafique.sara1400@gmail.com',
        From:'shafique.sara1400@gmail.com',
        Subject:`${name} sent you a message`,
        Body:`Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"));
}
