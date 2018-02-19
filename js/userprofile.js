window.onload=function(){ 
var cuser = document.getElementById('CurrentUser');
var sleep=document.getElementById('SleepTime');
var reminder=document.getElementById('ReminderNub');
if(cuser)
{
	
		name=localStorage.getItem("username");
		cuser.innerHTML=cuser.innerHTML+", "+name+"!";
		sleep.innerHTML="You would like to sleep for "+localStorage.getItem("sleeptime")+" hours.";
		reminder.innerHTML="You now have "+localStorage.getItem("remindernub")+" commitments."
		
	
  
}
}
function logout()
{
		  localStorage.setItem("username","");
		  localStorage.setItem("remindernub","");
		  localStorage.setItem("sleeptime","");
		  var logouthref=document.getElementById("logout");
		  logouthref.href="index.html";
		  return true;
}