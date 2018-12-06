firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("logged_in").style.visibility = "hidden";
  } else {
    document.getElementById("logged_in").style.visibility = "hidden";
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