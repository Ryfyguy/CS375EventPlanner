var lat_value;
var long_value;
var map;
var geocoder;

/* COMMENTING OUT ALL LOGIN CODE (MOVED TO "frontPage.html")
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

function openReg() {
   document.getElementById("userinfo").style.display = "inline-block";
 }
 function closeReg() {
   document.getElementById("userinfo").style.display = "none";
 }

 function openLog() {
  document.getElementById("Loginfo").style.display = "inline-block";
}
function closeLog() {
  document.getElementById("Loginfo").style.display = "none";
}*/

window.onload = function enableLocation() {
  navigator.geolocation.getCurrentPosition(showPosition, error);
}

function getLocation() {
  locationLatLong(lat_value, long_value);
}

function showPosition(position) {
  lat_value = position.coords.latitude;
  long_value = position.coords.longitude;
}

function error() {
	cur_location.innerHTML = "Geolocation is not supported by this browser.";
}

function initMap() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

function locationLatLong(lat, long) {
   console.log(lat);
   console.log(long);
   //var uluru = {lat: -25.344, lng: 131.036};
   var cur_position = {lat: parseFloat(lat), lng: parseFloat(long)};
   // The map, centered at cur_position
   map = new google.maps.Map(
      document.getElementById("map"), {
        zoom: 10,
        center: cur_position
      });
  // The marker, positioned at Uluru
   var marker = new google.maps.Marker({
     position: cur_position,
     map: map
   });
}

function getAddress() {
  var street = document.getElementById("street").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var address = street + ", "+ city + ", " + state;
  geocoder.geocode( {'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    }

    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })
}
