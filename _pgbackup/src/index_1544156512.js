var flag = 0;
var database = firebase.database().ref();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      //user signed in
      flag = 1;
      document.getElementById("test").style.visibility = "visible";
      document.getElementById("login_div").style.visibility = "hidden";
      window.alert("You have been signed in");
  } else {
      //no user signed in
       document.getElementById("test").style.visibility = "hidden";
       document.getElementById("login_div").style.visibility = "visbile";
  }
});


function check(){
 	if(flag == 0){
     window.location.reload();
     window.alert("Please Login")
     
    }else{
        
    }
}

function login(){
 	var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    var f1 = 0;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
        f1 = 1;
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : "+ errorMessage);
  // ...
});    
   	if(f1 != 1){
        database.child("users").set(userEmail);
    }
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
 flag = 1;
 window.location.reload();
}