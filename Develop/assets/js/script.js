
$( document ).ready(function() {
    //display the current date and time
    var todaysDate = moment().format('dddd, MMMM Do, YYYY - h:mm a');
    $("#currentDay").text(todaysDate);

    //save button events
    $(".saveBtn").on("click", function() {
      //on click, get the description text and the hour tied to the text so it can be put in localStorage
      var descText = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");

      //put descText and hour in localStorage
      localStorage.setItem(hour, descText);
    });

    //get descText and hour from localStorage
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));


  //get the current time
  //if timeblock < current time(hour?), then past
  //if timeblock = current hour, then present
  //if timeblock > current hour, then future
  //then restart the process (setInterval?)

  function checkTime() {
    //what hour of the day is it?
    var currentTime = moment().hours();

    //check the current time and depending on >, =, or <, add class for background colors
     $(".row").each(function() {
      var hourRow = $(this).attr("id");
      
      hourRow = parseInt(hourRow);
      if (hourRow < currentTime) {
        $(this).addClass("past");
      }
      else if (hourRow === currentTime) {
        $(this).addClass("present");
      }
      else {
        $(this).addClass("future");
      }
    })
  }

  checkTime();

  var checkTimeRunner = setInterval(checkTime, 60000);

});