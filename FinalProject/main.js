function checkForm() {
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

   if (password !== confirmPassword) {
   	document.getElementById("formErrors").style.display = "block";
   	document.getElementById("password").style.border = "2px solid red";
   	document.getElementById("passwordConfirm").style.border = "2px solid red";
   }
   else {
   	document.getElementById("matchError").remove();
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});

document.getElementById('Login').addEventListener('click', functiont(event){
    login();
});