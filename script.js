// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var config = {
  apiKey: "RiNAmxu8eSRBWxk2ovfzEaXMmH38yhiOFmitkkUX",
  authDomain: "barubelajar-2459c.firebaseio.com",
  databaseURL: "https://barubelajar-2459c.firebaseio.com",
  projectId: "barubelajar-2459c",
  storageBucket: "barubelajar-2459c.appspot.com",
  messagingSenderId: "522082534403"
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
