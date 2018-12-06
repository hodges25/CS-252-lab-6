firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("logged_in").style.display = "hidden";
  } else {
      //logged out
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
  window.alert("Error : "+ errorMessage);
  // ...
});   
}