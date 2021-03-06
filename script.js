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

function trackHours() {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("hr")[1]);

    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).removeClass("past");
    

    if (hourBlock < currentTime) {
      $(this).addClass("past");
   
    } else if (hourBlock === currentTime) {
      $(this).addClass("present");

} else {  
      $(this).addClass("future");
    }

  })

}




$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));

trackHours();