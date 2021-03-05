
$( document ).ready(function() {
    //display the current date and time
    var todaysDate = moment().format('dddd, MMM Do YYYY, HH:mm a');
    $("#currentDay").text(todaysDate);

    //save button events
    $(".saveBtn").on("click", function() {
      //on click, get the description text and the hour tied to the text so it can be put in localStorage
      var descText = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");

      //put descText and hour in localStorage
      localStorage.setItem(hour, descText);
    });

    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

});