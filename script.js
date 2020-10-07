var mySchedule = {};

$(document).ready(function () {
  $("#currentDay").html("Today is " + moment().format("MMMM Do YYYY, h:mm:ss a"));// displays current day

  
  checkSchedule();
  checkTime();

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
    if (mySchedule.hasOwnProperty('9') === true) {
      $("#9").find($("textarea")).val(mySchedule["9"]);
    }
    if (mySchedule.hasOwnProperty('10') === true) {
      $("#10").find($("textarea")).val(mySchedule["10"]);
    }
    if (mySchedule.hasOwnProperty('11') === true) {
      $("#11").find($("textarea")).val(mySchedule["11"]);
    }
    if (mySchedule.hasOwnProperty('12') === true) {
      $("#12").find($("textarea")).val(mySchedule["12"]);
    }
    if (mySchedule.hasOwnProperty('13') === true) {
      $("#13").find($("textarea")).val(mySchedule["13"]);
    }
    if (mySchedule.hasOwnProperty('14') === true) {
      $("#14").find($("textarea")).val(mySchedule["14"]);
    }
    if (mySchedule.hasOwnProperty('15') === true) {
      $("#15").find($("textarea")).val(mySchedule["15"]);
    }
    if (mySchedule.hasOwnProperty('16') === true) {
      $("#16").find($("textarea")).val(mySchedule["16"]);
    }
    if (mySchedule.hasOwnProperty('17') === true) {
      $("#17").find($("textarea")).val(mySchedule["17"]);
    }
  }

  function checkTime() {
    var currentTime = moment().format("H");
    var hourBlock = $(".time-block"); //select all timeblocks
    console.log(currentTime);
    hourBlock.each(function () {
      var hour = parseInt(this.id);
      console.log(hour);
      if (hour < currentTime ) {
        $(this).find("textarea").addClass("past");
      }
      else if (hour == currentTime) {
        $(this).find("textarea").addClass("present");
      }
      else {
        $(this).find("textarea").addClass("future");
      }
    })

  }
})