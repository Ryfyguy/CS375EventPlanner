//frontPage.js for CS375 Final Project
var lat_value;
var long_value;
var map;
var geocoder;

function checkRegForm() {
   // TODO: Perform input validation
   var fullName = document.getElementById('fullName').value;
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var confirmPassword=document.getElementById('passwordConfirm').value;
   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   var upperRegex = /(?=.*[A-Z])/;
   var lowerRegex = /(?=.*[a-z])/;
   var digitRegex = /(?=.*\d)/;

   if (fullName.length < 1) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("fullName").style.border = "2px solid red";
   }
   else {
   	document.getElementById("nameError").remove();
   }

   if (email.length < 1 || !emailRegex.test(email)) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("email").style.border = "2px solid red";
   }
   else {
   	document.getElementById("emailError").remove();
   }

   if (password.length < 10 || password.length > 20) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("password").style.border = "2px solid red";
   }
   else {
   	document.getElementById("lengthError").remove();
   }

   if (!upperRegex.test(password)) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("password").style.border = "2px solid red";
   }
   else {
   	document.getElementById("upperError").remove();
   }

   if (!lowerRegex.test(password)) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("password").style.border = "2px solid red";
   }
   else {
   	document.getElementById("lowerError").remove();
   }

   if (!digitRegex.test(password)) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("password").style.border = "2px solid red";
   }
   else {
   	document.getElementById("digitError").remove();
   }

   if ((password !== confirmPassword) || (confirmPassword == "")){
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("password").style.border = "2px solid red";
   	document.getElementById("passwordConfirm").style.border = "2px solid red";
   }
   else {
   	document.getElementById("matchError").remove();
   }
};

document.getElementById("submit2").addEventListener("click", function(event) {
   checkRegForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});

function checkLogForm(){
  alert("You submitted a login request!");
}
document.getElementById("submitLog").addEventListener("click", function(event) {
  checkLogForm();

  // Prevent default form action. DO NOT REMOVE THIS LINE
  event.preventDefault();
});
document.getElementById("cancel").addEventListener("click", function(event) {
  document.getElementById("formErrors").style.display = "none";
  document.getElementById("fullName").style.border = "1px solid grey";
  document.getElementById("email").style.border = "1px solid grey";
  document.getElementById("password").style.border = "1px solid grey";
  document.getElementById("passwordConfirm").style.border = "1px solid grey";
  event.preventDefault();
});

var signinBGC = document.getElementsByClassName("signinDiv");
var registerBGC = document.getElementsByClassName("registerDiv");
function openReg() {
   document.getElementById("userinfo").style.display = "inline-block";
   document.getElementById("Loginfo").style.display = "none";
   registerBGC[0].style.backgroundColor = "#f1f1f1";
   signinBGC[0].style.backgroundColor = "transparent";
 }
 function closeReg() {
   document.getElementById("userinfo").style.display = "none";
   registerBGC[0].style.backgroundColor = "transparent";
 }

 function openLog() {
  document.getElementById("Loginfo").style.display = "inline-block";
  document.getElementById("userinfo").style.display = "none";
  registerBGC[0].style.backgroundColor = "transparent";
  signinBGC[0].style.backgroundColor = "#f1f1f1";
}
function closeLog() {
  document.getElementById("Loginfo").style.display = "none";
  signinBGC[0].style.backgroundColor = "transparent";
}
