var mySchedule = {};
// displays current day
$("#currentDay").html("Today is " + moment().format("MMMM Do YYYY, h:mm:ss a"));

$(document).ready(function () {
    checkSchedule();

    $(".saveBtn").on("click", function () {
      var thisTimeblock = $(this).parent().closest("div[id]");
      var timeBlockID = thisTimeblock.attr("id");
      console.log("timeblock", timeBlockID);
      console.log(
        "saved text input: ",
        thisTimeblock.find($("textarea")).val()
      );
      mySchedule[timeBlockID] = thisTimeblock.find($("textarea")).val();
      console.log(mySchedule);
      localStorage.setItem("Schedule", JSON.stringify(mySchedule));
    });

  function scheduleIsEmpty() {
      if (localStorage.getItem("Schedule") === null) {
        return true;
      } else {
        return false;
      }
  }

  function checkSchedule() {
      if (scheduleIsEmpty() === false) {
        mySchedule = JSON.parse(localStorage.getItem("Schedule"));
        console.log(mySchedule);
        getStoredText();
      } else {
        console.log("the sched is empty");
      }
  }
  
  function getStoredText() {
    if (mySchedule.hasOwnProperty('nine') === true) {
      $("#nine").find($("textarea")).val(mySchedule["nine"]);
    }
    if (mySchedule.hasOwnProperty('ten') === true) {
      $("#ten").find($("textarea")).val(mySchedule["ten"]);
    }
    if (mySchedule.hasOwnProperty('eleven') === true) {
      $("#eleven").find($("textarea")).val(mySchedule["eleven"]);
    }
    if (mySchedule.hasOwnProperty('twelve') === true) {
      $("#twelve").find($("textarea")).val(mySchedule["twelve"]);
    }
    if (mySchedule.hasOwnProperty('one') === true) {
      $("#one").find($("textarea")).val(mySchedule["one"]);
    }
    if (mySchedule.hasOwnProperty('two') === true) {
      $("#two").find($("textarea")).val(mySchedule["two"]);
    }
    if (mySchedule.hasOwnProperty('three') === true) {
      $("#three").find($("textarea")).val(mySchedule["three"]);
    }
    if (mySchedule.hasOwnProperty('four') === true) {
      $("#four").find($("textarea")).val(mySchedule["four"]);
    }
    if (mySchedule.hasOwnProperty('five') === true) {
      $("#five").find($("textarea")).val(mySchedule["five"]);
    }
  }
})

  
