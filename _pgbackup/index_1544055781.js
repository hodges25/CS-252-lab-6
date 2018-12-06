firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      window.alert("You are logged in");
  } else {
       window.alert("It's broken");
  }
});

function login(){
 	var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : "+ errorMessage);
  // ...
});
}


function signUp(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
 	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});   
}