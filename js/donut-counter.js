//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests
var donuts

//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

guests = parseInt(prompt("how many guests"))
donuts = parseInt(prompt("how many donuts"))
//write a conditional to check if there are enough donuts

var messauge

if (guests <= donuts) {
  messauge = "YUM!"
}
else {
  messauge = "NOOOO"
}


  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
alert(messauge)
