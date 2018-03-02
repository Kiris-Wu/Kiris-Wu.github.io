
function addreminder()
{
	var plus=document.getElementById('comm');
	plus.style.display="none";
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
	
	var newdiv = document.createElement("div");
	newdiv.className="commitment-wrapper";
	
	var comm = document.getElementById("comm");
	comm.appendChild(newdiv);
	
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
		newprep.innerHTML="Prep Time: "+p.value+" Hour";
	}
	else	{
		newprep.innerHTML="Prep Time: "+p.value+" Hours";
	}
	newdiv.appendChild(newprep);
	
	
	//exchange display
	var plus=document.getElementById('comm');
	plus.style.display="block";
	var plus=document.getElementById('plusbtn');
	plus.style.display="block";
	var form=document.getElementById('rmdform');
	form.style.display="none";
	
	
	
}
function cancelclick()
{
	//exchange display
	var plus=document.getElementById('plusbtn');
	plus.style.display="block";
	var plus=document.getElementById('plusbtn');
	plus.style.display="block";
	var form=document.getElementById('rmdform');
	form.style.display="none";
}
