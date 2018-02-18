window.onload=function(){ 
var cuser = document.getElementById('CurrentUser');
if(cuser)
{
	
		name=localStorage.getItem("username");
		cuser.innerHTML=cuser.innerHTML+", "+name+"!";
	
  
}
}