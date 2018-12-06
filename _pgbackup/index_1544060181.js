firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      //user signed in
      document.getElementById("test").style.visibility = "visible";
       document.getElementById("login_div").style.visibility = "hidden";
      window.alert("You have been signed in");
  } else {
      //no user signed in
       document.getElementById("test").style.visibility = "hidden";
       document.getElementById("login_div").style.visibility = "visbile";
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

function logout(){
 firebase.auth().signOut().then(function() {
     
}).catch(function(error) {
  // An error happened
});   
 
}