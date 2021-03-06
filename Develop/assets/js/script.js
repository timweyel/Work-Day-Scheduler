
$( document ).ready(function() {
    //display the current date and time
    var todaysDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(todaysDate);

    //save button events
    $(".saveBtn").on("click", function() {
      //on click, get the description text and the hour tied to the text so it can be put in localStorage
      var descText = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");

      //put descText and hour in localStorage
      localStorage.setItem(hour, descText);
    });

    $("#8 .description").val(localStorage.getItem("8am"));
    $("#9 .description").val(localStorage.getItem("9am"));
    $("#10 .description").val(localStorage.getItem("10am"));
    $("#11 .description").val(localStorage.getItem("11am"));
    $("#12 .description").val(localStorage.getItem("12pm"));
    $("#1 .description").val(localStorage.getItem("1pm"));
    $("#2 .description").val(localStorage.getItem("2pm"));
    $("#3 .description").val(localStorage.getItem("3pm"));
    $("#4 .description").val(localStorage.getItem("4pm"));
    $("#5 .description").val(localStorage.getItem("5pm"));


  //get the current time
  //if timeblock < current time(hour?), then past
  //if timeblock = current hour, then present
  //if timeblock > current hour, then future
  //then restart the process (setInterval?)

  function checkTime() {
    //what hour of the day is it?
    var currentTime = moment().hours();
    // var currentTime = '12';

    //check the current time and depending on >, =, or <, add/remove class for background colors
    $(".timeblock").each(function() {
      var hourRow = $(this).attr("id");

      if (hourRow < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (hourRow === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  checkTime();
});