var Username=["Farron","Prompto"];
var Password = ["finalfantasy@13","15@finalfantasy"];
var Phone = ["7733720406","3720406773"];
var Email = ["Lightning@gmail.com","Chocobo@gmail.com"];
var Userid=["u01,u02"];
function checkLogin(){ 
  var entity = document.getElementById('entity').value; 
  var pwd = document.getElementById('pwd').value; 
  if(entity.indexOf("@")!=-1)
  {
	  indexN=Email.indexOf(entity);
	  if(indexN!=-1&&pwd==Password[indexN])
	  {
		  
		  var form=document.getElementById('loginform');
		  form.action="main.html";
		  localStorage.setItem("username",Username[indexN]);
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
		  notice.innerHTML="Password and Confirm Password are inconsistent!";
		  notice.style.color="#DC143C";
		  return false;
	  }
	  else
	  {
		   notice.innerHTML="Successful Confirmation!";
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
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Email address!";
		   return true;
	  }

	  
  }
  function checkPwd(){
	  var pwd = document.getElementById('regpwd').value; 
	  var regex = /^(?=.{6,40})(?=.*[a-zA-Z])(?=.*[_])(?=.*\d).*$/;
	  var notice=document.getElementById('Pwdnoti');
	  if (!regex.test(pwd))
	  {
		  notice.innerHTML="Invalid Password!";
		  notice.style.color="#DC143C";
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Password!";
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
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Phone numbers!";
		   return true;
	  }

	  
  }
  
  function checkName(){
	  var name = document.getElementById('regName').value; 
	  var regex = /^[a-zA-Z0-9_]{3,10}$/; 
	  var notice=document.getElementById('Namenoti');
	  if (!regex.test(name))
	  {
		  notice.innerHTML="Invalid Nickname!";
		  notice.style.color="#DC143C";
		  return false;
	  }
	  else
	  {
		  notice.innerHTML="valid Nickname!";
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
		  alert("You have created your account! Now redirecting...");
		  var form=document.getElementById('Regform');
		  form.action="main.html";
		  return true;
	  }
	  else
	  {
		  return false;
	  }
	  
  }
