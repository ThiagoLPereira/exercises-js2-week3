/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

var colors = ["white", "lightblue", "lightpink", "red", "yellow"];
var colorIndex = 0;
document.body.style.backgroundColor = colors[colorIndex];

setInterval(changeBgColor, 5000);
function changeBgColor() {
  colorIndex++;
  if (colorIndex == colors.length) {
    colorIndex = 0;
  }
  document.body.style.backgroundColor = colors[colorIndex];
}
