// $(document).ready(){
// }

  // display value of moment object
// var eDisplayMoment = $("#currentDay");
// $(eDisplayMoment).html(moment().format("MMMM Do YYYY, h:mm:ss a"));


$("#currentDay").html("Today is " + moment().format("MMMM Do YYYY, h:mm:ss a"));

//local time?
console.log(moment().format('LLLL'));


// relative time
// moment().startOf("day").fromNow();
// moment().endOf("day").fromNow();