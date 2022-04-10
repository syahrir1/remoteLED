// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var config = {
  apiKey: "AIzaSyAKS5wHevxhIGXt2YcTOqWtWFjk_XXmlzE",
  authDomain: "test-firebase-eea1d.firebaseapp.com",
  databaseURL: "https://test-firebase-eea1d-default-rtdb.firebaseio.com",
  projectId: "test-firebase-eea1d",
  storageBucket: "test-firebase-eea1d.appspot.com",
  messagingSenderId: "509095865784"
};
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
      $(".lightStatus").text("The light is on");
    } else {
      $(".lightStatus").text("The light is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");

    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
