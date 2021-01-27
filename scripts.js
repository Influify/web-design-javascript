// Display Date
var now = new Date();

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

Today =
  days[now.getDay()] +
  ", " +
  months[now.getMonth()] +
  " " +
  now.getDate() +
  ", " +
  now.getFullYear();

document.write(Today);
// Redirect if Java is not enabled

// Rollover Image

if (document.images) {
  homebuttonup = new Image();
  homebuttonup.src =
    "https://cdn.shopify.com/s/files/1/0040/0962/3598/files/ericc.png?v=1611756206";
  homebuttondown = new Image();
  homebuttondown.src =
    "https://cdn.shopify.com/s/files/1/0040/0962/3598/files/ericc.png?v=1611756206";
}

function buttondown(buttonname) {
  if (document.images) {
    document[buttonname].src = eval(buttonname + "down.src");
  }
}

function buttonup(buttonname) {
  if (document.images) {
    document[buttonname].src = eval(buttonname + "up.src");
  }
}
// Hello Button
function myFunction() {
  document.getElementById("message").innerHTML = "Hello!";
  document.getElementById("click").innerHTML = "";
}
