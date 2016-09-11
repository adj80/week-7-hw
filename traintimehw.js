// Initialize Firebase
var config = {
    apiKey: "AIzaSyBgHz5YXty9FR0q4kEdDOIKyhg0cAy7TH4",
    authDomain: "train-scheduler-18004.firebaseapp.com",
    databaseURL: "https://train-scheduler-18004.firebaseio.com",
    storageBucket: "train-scheduler-18004.appspot.com",
};
firebase.initializeApp(config);

var trainName;
var trainDestination;
var trainFirsttrainTime;
var trainFrequency;
//var nextArrival;
//var minutesAway;

$("#addTrainBtn").on("click", function() {
    trainName = $("#trainNameInput").val().trim();
    trainDestination = $("#destinationInput").val().trim();
    trainFirsttrainTime = $("#firsttrainTimeInput").val().trim();
    trainFrequency = $("#frequencyInput").val().trim();


    var newTrain = {
        name: trainName,
        destination: trainDestination,
        firsttrainTime: trainFirsttrainTime,
        frequency: trainFrequency

    };

    firebase.database().ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firsttrainTime);
    console.log(newTrain.frequency);

    $("#trainNameInput").val("");
    $("destinationInput").val("");
    $("firsttrainTimeInput").val("");
    $("frequencyInput").val("");
});
firebase.database().ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    trainName = childSnapshot.val().name;
    trainDestination = childSnapshot.val().destintion;
    trainFirsttrainTime = childSnapshot.val().firsttrainTime;
    trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFirsttrainTime);
    console.log(trainFrequency);

    //"calculate when the next train will arrive- should be relative to current time"
    //moment().fromNow();
    //console.log(moment(convertedDate)).toNow

    //var trainFirsttrainTime = moment().subtract("newTrain, HH:mm");
    //trainFirsttrainTime.fromNow();
    //var trainTime = moment();
    //var newTrain
    //var trainFirsttrainTime = trainTime.diff(newTrain, "hoursminutes");
    //console.log("hoursminutes: " + train)

    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFirsttraintime + "</td><td>" + trainFrequency + "</td><tr>");
});




