var weekTable= ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THRUSDAY","FRIDAY","SATURDAY"];
var monthTable=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];
function displayTime(){
    var currentTime= new Date();
    var day=currentTime.getDay();
    var date=currentTime.getDate();
    var month=currentTime.getMonth();
    var year=currentTime.getFullYear();
    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    console.log(seconds);
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(hours>12){
        hours = hours - 12;
        seconds = seconds + " " + "PM";
    }
    else{
        seconds = seconds + " " + "AM";
    }
    document.getElementById("day").innerHTML=weekTable[day];
    document.getElementById("month").innerHTML=monthTable[month];
    document.getElementById("year").innerHTML=year;
    document.getElementById("date").innerHTML=date;
    document.getElementById("digitalClock").innerHTML=hours+":"+minutes+":"+seconds;
}
setInterval(displayTime,1000);