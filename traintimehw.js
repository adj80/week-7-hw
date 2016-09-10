// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgHz5YXty9FR0q4kEdDOIKyhg0cAy7TH4",
    authDomain: "train-scheduler-18004.firebaseapp.com",
    databaseURL: "https://train-scheduler-18004.firebaseio.com",
    storageBucket: "train-scheduler-18004.appspot.com",
  };
  firebase.initializeApp(config);

  var trainName;
  var destination;
  var frequency;
  //var nextArrival;
  //var minutesAway;

  console.log('e');

  $("#addTrainBtn").on("click", function() {
  	trainName = $("#trainNameInput").val().trim();
  	destination = $("#destinationInput").val().trim();
  	frequency = $("#frequencyInput").val().trim();
  

  	var newTrain = {
  		name: trainName,
  		destination: trainDestination,
  		frequency: trainFrequency
  	}

  

  	firebase.database().ref().push(newTrain);

  	console.log(newTrain.name);
  	console.log(newTrain.destination);
  	console.log(newTrain.frequency);

  	$("#trainNameInput").val("");
  	$("destinationInput").val("");
  	$("frequencyInput").val("");

  	firebase.database().ref().on("child_added", function(childSnapshot, prevChildKey){

	  	console.log(childSnapshot.val());

	  	trainName = childSnapshot.val().name;
	  	trainDestination = childSnapshot.val().destintion;
	  	trainFrequency = childSnapshot.val().frequency;

	  	console.log(trainName);
	  	console.log(trainDestination);
	  	console.log(trainFrequency);

	  	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination +"</td><td>" + trainFrequency + "</td><tr>");
	});
});