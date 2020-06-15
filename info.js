console.log("link");

var myVar = setInterval(myTimer, 1000);
var count = 0;
var title = document.getElementById("title");

function myTimer() {
 count++;
  console.log(count);
  title.style.color = "#293075";
}
