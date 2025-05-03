let names, emails, phoneNumbers, messages;

function sendEmail(){

    names = document.getElementById("name").value;
    emails = document.getElementById("email").value;
    phoneNumbers = document.getElementById("phone-number").value;
    messages = document.getElementById("respond").value;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shienlee221004@gmail.com",
        Password : "25CA8B28A21F51E0D2CF9315D5E67947275F",
        To : 'shienlee221004@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Me Form",
        Body : "Name: " + names + "<br/>" + 
                "Email: " + emails + "<br/>" + 
                "Phone Number: " + phoneNumbers + "<br/>" + 
                "Message:" + "<br/>" + document.getElementById("respond").value
    }).then(
        message => {
            if(message == "OK"){
                alert("Message Sent")
            }
            else{
                alert("Error, Please Try Again")
            }
        }
    );

    document.getElementById("name").value = "";
    document.getElementById("email").value  = "";
    document.getElementById("phone-number").value  = "";
    document.getElementById("respond").value = "";
    
}
/*





*/


