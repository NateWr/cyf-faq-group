var helpful = 0;
var unhelpful = 0;
var total = 0;
var display = document.getElementById("displayCount");
var totalNumber = document.getElementById("totalNumber")
document.getElementById("Button1").addEventListener("click", function (event) {
    //var temp = event.target;
    helpful++;
    total++;
    display.innerHTML = helpful;
    totalNumber.innerHTML = total;
});
document.getElementById("Button2").addEventListener("click", function (event) {
    unhelpful++;
    total++;
    totalNumber.innerHTML = total;
});