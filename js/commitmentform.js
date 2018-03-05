
function addreminder()
{
	var nocommit=document.getElementById("Nonrmd")
	nocommit.style.display = "none";
	console.log(nocommit)
	var comm=document.getElementById('comm');
	comm.style.display="none";
	var plus=document.getElementById('plusbtn');
	plus.style.display="none";
	var form=document.getElementById('rmdform');
	form.style.display="block";
	
}

function saveclick()
{
	//passing value
	var n = document.getElementById("name");
	var t = document.getElementById("time");
	var p = document.getElementById("prep");
	// var apselect=document.getElementById("apm");
	// var apindex=apselect.selectedIndex;
	// var ap=" "+apselect.options[apindex].value;
	var hour = parseInt(t.value.split(":")[0]);
	var minute = t.value.split(":")[1];
	if(hour > 11) {
		var ap = "pm";
	} else {
		var ap = "am";
	}

	if(hour == 0) {
		hour = 12;
	}
	if(hour>12){
		hour = hour - 12;
	}

	var datef=document.getElementsByName("date");
	var datetxt="";
	for (var x = 0; x < datef.length; x++) {  
                    if(datef[x].checked) 
					{
						datetxt=datetxt+datef[x].value+" ";
					}
                } 
	//validation
	if(n.value=="")
	{
		 var notice=document.getElementById('comtname');
		  notice.innerHTML="Please enter the name of the commitment.";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return ;
	}
	if(p.value=="")
	{
		var notice=document.getElementById('comtpt');
		  notice.innerHTML="Please enter the preparation time of the commitment.";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return ;
	}
	if(datetxt=="")
	{
		var notice=document.getElementById('comtck');
		  notice.innerHTML="Please check at least one of the date.";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return ;
	}
	
	//save in stroage
	var nub=parseInt(localStorage.getItem("remindernub"));
	if(nub==0)
	{
	localStorage.setItem("commitname",n.value);
	localStorage.setItem("committime",hour+":"+minute+ap);
	localStorage.setItem("preptime",p.value);
	localStorage.setItem("datefn",datetxt);
	}
	else
	{
		var pn=localStorage.getItem("commitname")+";"+n.value;
		var pt=localStorage.getItem("committime")+";"+hour+":"+minute+ap;
		var pp=localStorage.getItem("preptime")+";"+p.value;
		var df=localStorage.getItem("datefn")+";"+datetxt;
		localStorage.setItem("commitname",pn);
		localStorage.setItem("committime",pt);
		localStorage.setItem("preptime",pp);
		localStorage.setItem("datefn",df);
	}
	
	var newdiv = document.createElement("div");
	newdiv.className="commitment-wrapper";
	newdiv.setAttribute("name","cmlist");
	
	var comm = document.getElementById("comm");
	comm.appendChild(newdiv);
	
	var button2 = document.createElement("div");
	button2.className="commitment-button2";
	button2.innerHTML="A";
	button2.setAttribute("onClick", "onAlarm()");
	newdiv.appendChild(button2);
	
	var button = document.createElement("div");
	button.className="commitment-button";
	button.innerHTML="On";
	button.setAttribute("onClick", "javascript: onoffswitch(this);");
	newdiv.appendChild(button);
	
	var newname = document.createElement("div");
	newname.className="commitment-name";
	newname.innerHTML="<b>"+n.value+"</b>";
	newdiv.appendChild(newname);
	
	var newtime = document.createElement("div");
	newtime.className="commitment-time";
	newtime.innerHTML="Time: "+hour+":"+minute+ap;
	newdiv.appendChild(newtime);
	
	var newprep = document.createElement("div");
	newprep.className="commitment-prep";
	if (p.value==1){
		newprep.innerHTML="Prep Time: "+p.value+" Minute";
	}
	else	{
		newprep.innerHTML="Prep Time: "+p.value+" Minutes";
	}
	newdiv.appendChild(newprep);
	
	var newdate = document.createElement("div");
	newdate.className="commitment-date";
	newdate.innerHTML=datetxt;
	newdiv.appendChild(newdate);
	
	
	//exchange display
	var comm=document.getElementById('comm');
	comm.style.display="block";
	var plus=document.getElementById('plusbtn');
	plus.style.display="block";
	var form=document.getElementById('rmdform');
	form.style.display="none";
	var reminder=parseInt(localStorage.getItem("remindernub"));
	reminder=reminder+1;
	localStorage.setItem("remindernub",reminder);
	var nonrmdl=document.getElementById('Nonrmd');
	if(nonrmdl!="")
	{
		nonrmdl.style.display="none";
	}
	
	
}

function cancelclick()
{
	//exchange display
	var comm=document.getElementById('comm');
	comm.style.display="block";
	var plus=document.getElementById('plusbtn');
	plus.style.display="block";
	var form=document.getElementById('rmdform');
	form.style.display="none";
	if(localStorage.getItem("remindernub")=="0")
	{
		var nocommit=document.getElementById("Nonrmd")
		nocommit.style.display = "block";
	}
}

function onoffswitch(elem){
	if (elem.innerHTML=="On"){
		elem.innerHTML="Off";
		elem.style.backgroundColor="Red";
	}
	else {
		elem.innerHTML="On";
		elem.style.backgroundColor="Green";
	}
}
function onAlarm()
{
	
	location.href="alarm.html";
}
