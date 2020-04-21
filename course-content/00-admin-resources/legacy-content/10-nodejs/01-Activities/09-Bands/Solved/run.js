// Gets the myBands object from the bands file.
var bandList = require("./bands.js");

// var bandList = {
//   punk: "Green Day",
//   rap: "Run DMC",
//   classic: "Led Zeppelin"
// };

// Loop through band list and print out details
for (var xyz in bandList) {
  console.log("A " + xyz + " band is " + bandList[xyz] + ".");
}
