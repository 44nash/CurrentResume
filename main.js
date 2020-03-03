  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0qyhRsM_3KkUEfxRZRxfjUEj-eIm0uoU",
    authDomain: "resume-cd36c.firebaseapp.com",
    databaseURL: "https://resume-cd36c.firebaseio.com",
    projectId: "resume-cd36c",
    storageBucket: "resume-cd36c.appspot.com",
    messagingSenderId: "918309204228",
    appId: "1:918309204228:web:1983bc3a7bd4e0f022e051",
    measurementId: "G-G3FSNP0567"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Reference messsges collection
var messagesRef = firebase.database().ref('yourMessage');

//Listen for form submit
document.getElementById("contactForm").addEventListener('submit', submitForm);


//Submit form
function submitForm(e){
    e.preventDefault();

    //test for the submit button
    //console.log(123);

    //Get values  
    var firstName = getInputVal("firstName");
    var lastName = getInputVal("lastName");
    var phoneNumber = getInputVal("phoneNumber");
    var email = getInputVal("email");
    var yourMessage = getInputVal("yourMessage");

    
    //Save message
    saveMessage(firstName,lastName, email, phoneNumber,yourMessage);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();


}

// var $contactForm = $('#contact-form');
// $('contactForm').submit(function(e){
//     var firstName = getInputVal("firstName");
//     var lastName = getInputVal("lastName");
//     var phoneNumber = getInputVal("phoneNumber");
//     var email = getInputVal("email");
//     var yourMessage = getInputVal("yourMessage");

//     if(!firstName ||!lastName ||!phoneNumber  ||!email  ||!yourMessage  ){
//         alertify.error("please check your entries")
//     }else{
//         $.ajax({
//             url: '//formspree.io/44nash@gmail.com',
//             method: 'POST',
//             data: $(this).serialize(),
//             dataType: 'json',
//             beforeSend: function() {
//                 $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
//             },
//             success: function(data) {
//                 $contactForm.find('.alert--loading').hide();
//                 $contactForm.append('<div class="alert alert--success">Message sent!</div>');
//             },
//             error: function(err) {
//                 $contactForm.find('.alert--loading').hide();
//                 $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
//             }
//         });

//         e.preventDefault()
//         $(this).get(0).reset()
//         alertify.succes('Messeg sent')
//     }
    
// });


//function to get get form values

function getInputVal(id){
    //console.log(7777); 
    //return document.getElementById(id).v;
    var str,
    element = document.getElementById(id);
    if (element != null) {
        str = element.value;
    }
    else {
        str = null;
    }
    return str;
}

//Save message to firebase

function saveMessage(firstName,lastName, email, phoneNumber, yourMessage){
    var newmessagesRef  = messagesRef.push();
    newmessagesRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        yourMessage: yourMessage

    });
}