

function Countdown(){

var currentDate=new Date();
var eventDate=new Date(2017,11,5);

var currentTime=currentDate.getTime();
var eventTime=eventDate.getTime();
var remTime=eventTime-currentTime;

var s=Math.floor(remTime/1000);
var m=Math.floor(s/60);
var h=Math.floor(m/60);
var d=Math.floor(h/24);

h=h%24;
m=m%60;
s=s%60;

if(h<10){
	h="0"+h;
}
if(m<10){
	m="0"+m;
}
if(s<10){
	s="0"+s;
}

var days=document.getElementById("days");
days.textContent=d;
var hours=document.getElementById("hours");
hours.textContent=h;
var minutes=document.getElementById("minutes");
minutes.textContent=m;
var seconds=document.getElementById("seconds");
seconds.textContent=s;
setTimeout(Countdown,1000);
}
Countdown();
