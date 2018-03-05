var arr2="";
var lineChartData="";
var defaults="";
var sleeptime;
window.onload=function(){ 
	var cuser = document.getElementById('CurrentUser');
	var sleep=document.getElementById('SleepTime');
	var reminder=document.getElementById('ReminderNub');
	if(cuser)
	{
		
		name=localStorage.getItem("username");
		cuser.innerHTML=cuser.innerHTML+", "+name+"!";
		sleep.innerHTML="You would like to sleep for ";
		if(localStorage.getItem("sleeptime")!="0"&&localStorage.getItem("sleeptime")!="")
		{
			setsleep=localStorage.getItem("sleeptime");
			myselect=document.getElementById('sleephour').options;
			for(i=0;i<myselect.length;i++)
			{
				if(myselect[i].value==setsleep)
				{
					myselect[i].selected=true;
				}
			}
		}
		
		reminder.innerHTML="You now have "+localStorage.getItem("remindernub")+" commitments."
		
		
		
	}
	
	//drawing graphic
	drawGraphic();
	var canvas=document.getElementById("snooze")
	var ctx = document.getElementById("snooze").getContext("2d");
	mychart = new Chart(ctx).Line(lineChartData,defaults); 
}
function reminderchange()
{
	var reminder=document.getElementById('ReminderNub');
	reminder.innerHTML="You now have "+localStorage.getItem("remindernub")+" commitments."
	
}
function drawCommit()
{
	
	
	if(localStorage.getItem("remindernub")=="0")
	{
		// var label=document.createElement("label");
		// label.style.fontSize="400%";
		// label.id="Nonrmd";
		// label.innerHTML="No Commitment Now!"
		// var comm = document.getElementById("comm");
		// comm.appendChild(label);
		var nocommit=document.getElementById("Nonrmd")
		nocommit.style.display = "block";

	}
	else
	{
		nocommit.style.display = "none";
		var node=document.getElementsByName("cmlist");
		var listnub=node.length;
		var rmdnub=parseInt(localStorage.getItem("remindernub"));
		if(listnub==rmdnub)
		{
			return;
		}

		var n=localStorage.getItem("commitname");
		var t=localStorage.getItem("committime");
		var p=localStorage.getItem("preptime");
		var df=localStorage.getItem("datefn");
		var nub=parseInt(localStorage.getItem("remindernub"));

		for(i=1;i<=nub;i++)
		{
			if(nub==1)
			{
				nvalue=n;
				tvalue=t;
				pvalue=p;
				dfvalue=df;
			}
			else
			{
				var nsplit=n.split(";");
				var tsplit=t.split(";");
				var psplit=p.split(";");
				var dfsplit=df.split(";");
				nvalue=nsplit[i];
				tvalue=tsplit[i];
				pvalue=psplit[i];
				dfvalue=dfsplit[i];
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
			newname.innerHTML="<b>"+nvalue+"</b>";
			newdiv.appendChild(newname);

			var newtime = document.createElement("div");
			newtime.className="commitment-time";
			newtime.innerHTML="Time: "+tvalue;
			newdiv.appendChild(newtime);

			var newprep = document.createElement("div");
			newprep.className="commitment-prep";
			if (p.value==1){
				newprep.innerHTML="Prep Time: "+pvalue+" Minute";
			}
			else	{
				newprep.innerHTML="Prep Time: "+pvalue+" Minutes";
			}
			newdiv.appendChild(newprep);

			var newdate = document.createElement("div");
			newdate.className="commitment-date";
			newdate.innerHTML=dfvalue;
			newdiv.appendChild(newdate);


		}
	}
	
	
	
}
function logout()
{
	localStorage.setItem("username","");
	localStorage.setItem("remindernub","");
	localStorage.setItem("sleeptime","");
	localStorage.setItem("commitname","");
	localStorage.setItem("committime","");
	localStorage.setItem("preptime","");
	var logouthref=document.getElementById("logout");
	logouthref.href="index.html";
	return true;
}
function changesleep()
{
	myselect=document.getElementById('sleephour').options;
	var index=myselect.selectedIndex;
	var value=myselect.options[index].value;
	localStorage.setItem("sleeptime",value);
}
function drawGraphic()
{
	arr2=new Array();
	if(localStorage.getItem("sleeptime")!="0"&&localStorage.getItem("sleeptime")!="")
	{
		sleeptime=Math.round(Math.random()*5+5);
		var seed=0;
		for(var i = 0; i < 7;i++)
		{ 
			seed=Math.round(Math.random()*10);
			arr2[i]=5*seed;
			arr2[i]=(arr2[i]/(sleeptime*60));

		}
	}
	else
	{
		sleeptime=0;
		for(var i = 0; i < 7;i++)
		{ 
			arr2[i]=0;
		}
	}

	
	
	lineChartData = {  
//x axis label
labels : ["Sun","Mon","Tu","Wed","Th","Fri","Sat"],
datasets : [

{
	fillColor : "transparent",
	strokeColor : "rgba(151,187,205,1)",
	pointColor : "rgba(151,187,205,1)",
	pointStrokeColor : "#fff",
        data : []    //data for x
    }
    ]
}

for(var i = 0; i < arr2.length;i++)
{ 
	lineChartData.datasets[0].data.push(arr2[i]);
}

//定义图表的参数   
defaults = {    
    scaleStartValue :null,     // start y value
    scaleLineColor : "rgba(0,0,0,.1)",    // color for Y/X 
    scaleLineWidth : 3,        // width for X,Y
    scaleShowLabels : true,      
    scaleLabel : "<%=value%>",   
    scaleFontFamily : "'Arial'",   
    scaleFontSize : 43,         
    scaleFontStyle : "normal",   
    scaleFontColor : "#666",      
    scaleShowGridLines : true,    
    scaleGridLineColor : "rgba(0,0,0,.05)",   
    scaleGridLineWidth : 4,        
    bezierCurve : false,              
    pointDot : true,              
    pointDotRadius : 15,          
    pointDotStrokeWidth : 3,     
    datasetStroke : true,        
    datasetStrokeWidth : 4,      
    datasetFill : false,          
    animation : true,             
    animationSteps : 60,             
    animationEasing : "easeOutQuart",    
    onAnimationComplete : null,
    tooltipFontSize: 40,
    tooltipTemplate: "<%if (label){%><%=label%>:sleep:"+sleeptime+"h,snooze:<%}%><%=Math.round(value*8*60)%>"+"min"
}

}