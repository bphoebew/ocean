var myVar = setInterval(myTimer, 1000);
var count = 0;
var circle = document.getElementById("moveCir");
var sun = document.getElementById("sun");
var cloud = document.getElementById("moveC");
var boat = document.getElementById("moveB");
var water = document.getElementById("changeW");
var title = document.getElementById("titleC");
var fishClub = document.getElementById("fishClub");
var fishPic = document.getElementById("fishPic");
var arrow = document.getElementById("arrowC");

function myTimer() {
 count++;
  console.log(count);
  if (count == 1){
    fishClub.style.marginRight = "10px";
    fishClub.style.marginTop = "10px";
  }
  if (count == 2){
    fishClub.style.marginRight = "50px";
    // fishClub.style.marginTop = "10px";
  }
  if (count == 3){
    fishClub.style.marginRight = "100px";
    fishClub.style.marginTop = "-10px";
  }
  if (count == 4){
    fishClub.style.marginRight = "130px";
    fishClub.style.marginTop = "-10px";
  }
  if (count == 5){
    title.style.color = "red";
    fishClub.style.marginRight = "150px";
    fishClub.style.marginTop = "0px";
  }
  if (count == 7){
    boat.style.marginLeft = "90px";
    sun.style.marginTop = "30px";
    cloud.style.marginLeft = "90px";
    water.style.backgroundColor = "#9DA1C3";
    circle.style.backgroundColor = "#808080";
    document.body.style.backgroundColor = "#B8CCC9";
    console.log("hi");
    fishClub.style.marginRight = "200px";
    fishClub.style.marginTop = "250px";
    fishClub.style.transform = "rotate(-90deg)";
  }
  if (count == 7){
    title.style.color = "black";
  }
  if (count == 17){
    console.log("here");
    title.style.color = "#CC8F8F";
    arrow.style.visibility = "visible";
  }
  if (count == 20){
    title.style.color = "black";
    arrow.style.visibility = "visible";
  }
}

(function(){
      var words = [
          'Our Beautiful Oceans',
          'Are Dying',
          'Due to Climate Crises',
          'We Need to Help Them',
          'Click to Learn and Explore More Now!',
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 4000);
  })();
