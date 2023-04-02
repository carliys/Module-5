// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

// var currentDate = moment().format("dddd, MMM D, YYYY");
// $("#todaysDate").text(currentDate);

var currentDate = dayjs();
$('#today').text(currentDate.format("hh:mm:ss a"));
var time =dayjs().hour();

// var time = moment().format("hh:mm:ss a");

$(".time-block").ready(function() {
  var timeBlock = parseInt($(this).attr("id"));
  if (time === timeBlock) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");

  } else if (time > timeBlock) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");

  } else { 
    $(this).addClass("present")

  }
})

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});



$(function() {

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
