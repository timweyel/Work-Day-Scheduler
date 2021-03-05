
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


});