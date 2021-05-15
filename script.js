$(document).ready(function (){ //tells browswer to load 1)html & 2) css first


 // display current date at top of caledar
 var todayDate = moment().format("dddd, MMM Do YYYY");
 $("#currentDay").html(todayDate);
 });

$("#saveBtn").on("click", function () {
  console.log(this);

var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

localStorage.setItem(time, text);
})




//  var currentTime = moment().hour();




//  function timeTracker() {
//   //get current number of hours.
//   var timeNow = moment().hour();




// //added curly bracket since it was missing




//  // Click the save button, save to local storage

//  // When I refresh the page, the save events persist

// // ('#text').html("Text");
// // localStorage.content = $('#text').html();
// // $('#text').html(localStorage.content);

// // var saveTasks = function() {
// //     localStorage.setItem("#text", JSON.stringify(Text));
// //   };

// // var loadTasks = function() {
// //     tasks = JSON.parse(localStorage.getItem("text"));
// //   };


// //   // display current date at top of caledar
// //   var todayDate = moment().format("dddd, MMM Do YYYY");
// //  	$("#currentDay").html(todayDate);
