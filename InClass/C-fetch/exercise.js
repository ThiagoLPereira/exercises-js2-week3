/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160")
  .then(function (response) {
    var myJson = response.json();
  })
  .then(function (myJson) {
    console.log(myJson.main.temp);
  })
  .catch(function (error) {
    console.log("There was an error");
  });

var lat = 35;
var lon = 160;
var url = "https://fcc-weather-api.glitch.me/api/current";
url += "?lat=" + lat;
url += "&lon=" + lon;
