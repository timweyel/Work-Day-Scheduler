
$( document ).ready(function() {
    //display the current date and time
    var todaysDate = moment().format('dddd, MMM Do YYYY, HH:mm a');
    $("#currentDay").text(todaysDate);
});