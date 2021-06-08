/*Mentor code*/
const apiKey = "5ae2e3f221c38a28845f05b6fd99a42e5582bdb2ab7d5fae38fc21a0";
    function apiGet(method, query) {
      return new Promise(function(resolve, reject) {
        var otmAPI =
          "https://api.opentripmap.com/0.1/en/places/" +
          method +
          "?apikey=" +
          apiKey;
        if (query !== undefined) {
          otmAPI += "&" + query;
        }
        fetch(otmAPI)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(function(err) {
            console.log("Fetch Error :-S", err);
          });
      });
    }
/**/

/*My Code*/
 function quiz(){
    var continent = document.querySelector('input[id="continent"]:checked').value;
    var language = document.querySelector('input[id="language"]:checked').value;
    var temperature = document.getElementById("temperature").value;
    var climate = document.querySelector('input[id="climate"]:checked').value;
var spend = ["100","200","300","400","500","600"];
let low_spend = spend[0 || 1];
let low_mid_spend = spend[1 || 2];
let mid_spend = spend[2 || 3];

if (low_mid_spend === spend[1 || 2] && continent === "Europe" && language === "no" && climate === "HumidSubtropical" && temperature >= "60" && temperature <= "80")
{
answer = "France"
answer1 = "Germany"
answer2 = ""
answer3 =""
answer4 =""
answer5 =""
answer6 =""
answer7 =""
}

else if ([low_mid_spend === spend[1 || 2] || mid_spend [2||3]] && continent==="Europe" &&
language === "yes" && climate === "Continental" && temperature >= "54" && temperature <= "76")
{
answer =""
answer1 = "Germany"
answer2 = "Italy"
answer3 =""
answer4 =""
answer5 =""
answer6 =""
answer7 =""
}

else if ([low_spend ===spend[0||1] || low_mid_spend[1||2]] && continent === "Asia" && language === "no" &&
climate === "TropicalSavanna" && temperature >= "75" && temperature <= "88" )
{
answer =""
answer1 = ""
answer2 = ""
answer3 ="Taiwan"
answer4 ="Singapore"
answer5 =""
answer6 =""
answer7 =""
}

else if (mid_spend ===spend[2||3] && continent === "Europe" && language === "no" && climate === "Mediterranean"
&& temperature >= "60" && temperature <= "80")
{
answer =""
answer1 = ""
answer2 = "Italy"
answer3 =""
answer4 =""
answer5 ="Spain"
answer6 =""
answer7 =""
}

else if (low_mid_spend===spend[1||2] && continent === "Asia" && language === "no" && climate === "HumidSubtropical"
&& temperature >= "80" && temperature <= "90") 
{
answer =""
answer1 = ""
answer2 = ""
answer3 =""
answer4 =""
answer5 =""
answer6 ="China"
answer7 ="Hong Kong"
}

document.getElementById("link").innerHTML = answer;
document.getElementById("link1").innerHTML = answer1;
document.getElementById("link2").innerHTML = answer2;
document.getElementById("link3").innerHTML = answer3;
document.getElementById("link4").innerHTML = answer4;
document.getElementById("link5").innerHTML = answer5;
document.getElementById("link6").innerHTML = answer6;
document.getElementById("link7").innerHTML = answer7;
/**/
/*From W3schools, stackoverflow,etc.*/
var btn = document.getElementsByClassName("modal-button")

var modals = document.querySelectorAll('.modal');

var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
return
}

  window.onload = function() {
    document.querySelectorAll("INPUT[type='radio']").forEach(function(rd) {
      rd.addEventListener("mousedown", function() {
        if(this.checked) {
          this.onclick=function() {
            this.checked=false
          }
        } else {
          this.onclick=null
  }
  })
  })}
/**/
