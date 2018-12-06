firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("test").style.display = "hidden";
      window.alert("You are logged in");
  } else {
      document.getElementById("test").style.display = "hidden";
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