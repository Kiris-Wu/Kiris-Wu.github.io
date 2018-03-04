
function addreminder()
{
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
	
	//save in stroage
	var nub=parseInt(localStorage.getItem("remindernub"));
	if(nub==0)
	{
	localStorage.setItem("commitname",n.value);
	localStorage.setItem("committime",t.value);
	localStorage.setItem("preptime",p.value);
	}
	else
	{
		var pn=localStorage.getItem("commitname")+";"+n.value;
		var pt=localStorage.getItem("committime")+";"+t.value;
		var pp=localStorage.getItem("preptime")+";"+p.value;
		localStorage.setItem("commitname",pn);
		localStorage.setItem("committime",pt);
		localStorage.setItem("preptime",pp);
	}
	
	var newdiv = document.createElement("div");
	newdiv.className="commitment-wrapper";
	
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
	newtime.innerHTML="Time: "+t.value;
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
