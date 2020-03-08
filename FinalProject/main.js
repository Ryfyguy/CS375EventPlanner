var lat_value;
var long_value;

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

window.onload = function enableLocation() {
  navigator.geolocation.getCurrentPosition(showPosition, error);
}

function getLocation() {
  initMap(lat_value, long_value);
}

function showPosition(position) {
  lat_value = position.coords.latitude;
  long_value = position.coords.longitude;
}

function error() {
	cur_location.innerHTML = "Geolocation is not supported by this browser.";
}

function initMap(lat, long) {
   console.log(lat);
   console.log(long);
   //var uluru = {lat: -25.344, lng: 131.036};
   var cur_position = {lat: parseInt(lat), lng: parseInt(long)};
   // The map, centered at cur_position
   var map = new google.maps.Map(
      document.getElementById("map"), {zoom: 10, center: cur_position});
  // The marker, positioned at Uluru
   var marker = new google.maps.Marker({position: cur_position, map: map});
}
