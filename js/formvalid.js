var Username=["Farron","Prompto","Test"];
var Password = ["finalfantasy13","15finalfantasy","test123"];
var Phone = ["7733720406","3720406773","1234567890"];
var Email = ["Lightning@gmail.com","Chocobo@gmail.com","test@test.com"];
var Userid=["u01,u02,u03"];
var ReminderNub=[3,2];
var Sleeptime=[8,7];
function checkLogin(){ 
  var entity = document.getElementById('entity').value; 
  var pwd = document.getElementById('pwd').value; 
  if(entity.indexOf("@")!=-1)
  {
	  indexN=Email.indexOf(entity);
	  if(indexN!=-1&&pwd==Password[indexN])
	  {
		  localStorage.setItem("username",Username[indexN]);
		  localStorage.setItem("remindernub",ReminderNub[indexN]);
		  localStorage.setItem("sleeptime",Sleeptime[indexN]);
		  var form=document.getElementById('loginform');
		  form.action="main.html";
		  
		  return true;
	  }
	  else
	  {
		  var notice=document.getElementById('notice');
		  notice.innerHTML="Wrong Phone/Email or Password";
		  notice.style.color="#DC143C";
		  return false;
	  }
	  
  }
  else
  {
	  indexN=Phone.indexOf(entity);
	  if(indexN!=-1&&pwd==Password[indexN])
	  {
		  localStorage.setItem("username",Username[indexN]);
		  localStorage.setItem("remindernub",ReminderNub[indexN]);
		  localStorage.setItem("sleeptime",Sleeptime[indexN]);
		  var form=document.getElementById('loginform');
		  form.action="main.html";
		  return true;
	  }
	  else
	  {
		  var notice=document.getElementById('notice');
		  notice.innerHTML="Wrong Phone/Email or Password";
		  notice.style.color="#DC143C";
		  return false;
	  }
	  
  }

	
  
  } 
  function checkConpwd(){
	  var Confirm = document.getElementById('confirm').value; 
	  var Regpwd = document.getElementById('regpwd').value; 
	  var notice=document.getElementById('Connoti');
	  if(Confirm!=Regpwd)
	  {
		  notice.innerHTML="Password and Confirm are inconsistent!";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return false;
	  }
	  else
	  {
		   notice.innerHTML="Successful Confirmation!";
		   notice.style.color="#32CD32";
		   notice.removeAttribute("hidden");
		   return true;
	  }
	  
  }
  function checkEmail(){
	  var email = document.getElementById('regEmail').value; 
	  var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
	  var notice=document.getElementById('Emailnoti');
	  if (!regex.test(email))
	  {
		  notice.innerHTML="Invalid Email address!";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="Valid Email address!";
		  notice.style.color="#32CD32";
		  notice.removeAttribute("hidden");
		   return true;
	  }

	  
  }
  function checkPwd(){
	  var pwd = document.getElementById('regpwd').value; 
	  var regex = /^\S{6,40}$/;
	  var notice=document.getElementById('Pwdnoti');
	  if (!regex.test(pwd))
	  {
		  notice.innerHTML="Invalid Password!";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Password!";
		  notice.style.color="#32CD32";
		  notice.removeAttribute("hidden");
		   return true;
	  }
	  
  }
  function checkPne(){
	  var pne = document.getElementById('regPne').value; 
	  var regex = /^(?=.{10})(?=.*\d).*$/
	  var notice=document.getElementById('Pnenoti');
	  if (!regex.test(pne))
	  {
		  notice.innerHTML="Invalid Phone numbers!";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Phone numbers!";
		  notice.style.color="#32CD32";
		  notice.removeAttribute("hidden");
		   return true;
	  }

	  
  }
  
  function checkName(){
	  var name = document.getElementById('regName').value; 
	  var regex = /^[a-zA-Z0-9_-]{3,10}$/; 
	  var notice=document.getElementById('Namenoti');
	  if (!regex.test(name))
	  {
		  notice.innerHTML="Invalid Nickname!";
		  notice.style.color="#DC143C";
		  notice.removeAttribute("hidden");
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Nickname!";
		  notice.style.color="#32CD32";
		  notice.removeAttribute("hidden");
		   return true;
	  }

	  
  }
 

  
  function checkReg(){
	  if(checkName()&&checkPne()&&checkEmail()&&checkPwd()&&checkConpwd())
	  {
		  Username.push(document.getElementById('regName').value);
		  Password.push(document.getElementById('regpwd').value);
		  Phone.push(document.getElementById('regPne').value);
		  Email.push(document.getElementById('regEmail').value);
	      Userid.push("u"+"0"+Userid.length);
		  len=Userid.length;
		  localStorage.setItem("username",Username[len]);
		  localStorage.setItem("remindernub",0);
		  localStorage.setItem("sleeptime",0);
		  var notice=document.getElementById('regnotice');
		  notice.innerHTML="You have created your account! Now redirecting...";
		  notice.style.color="#32CD32";
		  var form=document.getElementById('Regform');
		  form.action="main.html";
		  return true;
	  }
	  else
	  {
		  var notice=document.getElementById('regnotice');
		  notice.innerHTML="There are some errors on the form, please check with the notices!";
		  notice.style.color="#DC143C";
		  return false;
	  }
	  
  }
