$(document).ready(function () { //tells browswer to load 1)html & 2) css first


  // display current date at top of caledar
  var todayDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(todayDate);
});



$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //set items in local storage.
  localStorage.setItem(time, text);
})

function trackHours () {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var hourBlock = pasrseInt($(this).attr("id).split"("hour")[1]);
    console.log(hourBlock, currentTime)

  if (hourBlock < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  }

  
