var arr2="";
var lineChartData="";
var defaults="";

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
	
	//drawing graphic
	drawGraphic();
	var canvas=document.getElementById("snooze")
	var ctx = document.getElementById("snooze").getContext("2d");
    mychart = new Chart(ctx).Line(lineChartData,defaults); 
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
function drawGraphic()
{
	arr2=new Array();
	if(localStorage.getItem("sleeptime")!="0"&&localStorage.getItem("sleeptime")!="")
	{
		var seed=0;
		for(var i = 0; i < 7;i++)
	   { 
		seed=Math.round(Math.random()*10)
		arr2[i]=5*seed;
	   }
	}
	else
	{
		for(var i = 0; i < 7;i++)
	   { 
		arr2[i]=0;
	   }
	}
		
	
	
	lineChartData = {  
//x axis label
labels : ["Mon","Tu","Wed","Th","Fri","Sat","Sun"],
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
    }
	
}