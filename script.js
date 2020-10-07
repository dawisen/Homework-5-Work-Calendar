var mySchedule = {};

$(document).ready(function () {
  $("#currentDay").html("Today is " + moment().format("MMMM Do YYYY, h:mm:ss a"));// displays current day

  checkTime();
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
    if (mySchedule.hasOwnProperty('1') === true) {
      $("#1").find($("textarea")).val(mySchedule["1"]);
    }
    if (mySchedule.hasOwnProperty('2') === true) {
      $("#2").find($("textarea")).val(mySchedule["2"]);
    }
    if (mySchedule.hasOwnProperty('3') === true) {
      $("#3").find($("textarea")).val(mySchedule["3"]);
    }
    if (mySchedule.hasOwnProperty('4') === true) {
      $("#4").find($("textarea")).val(mySchedule["4"]);
    }
    if (mySchedule.hasOwnProperty('5') === true) {
      $("#5").find($("textarea")).val(mySchedule["5"]);
    }
  }

  function checkTime() {
    var currentTime = moment().format("H");
    var timeBlockElements = $(".timeblock").find($("textarea"));
    for (var index = 0; index < timeBlockElements.length; index++) {
      var elementID = timeBlockElements[index].id;
      var manipID = $(timeBlockElements[index]).attr("id");
      $(timeBlockElements[index].id).removeClass(".present .past .future");

      if (elementID < currentTime) {
        $(manipID).addClass("past");
      } else if (elementID > currentTime) {
        $(manipID).addClass("future");
      } else {
        $(manipID).addClass("present");
      }
    }
  }
  setInterval(checkTime(), 1000 * 60 * 5);
})

  

//https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day