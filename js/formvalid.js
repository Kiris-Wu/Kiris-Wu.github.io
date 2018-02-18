var Password = ["finalfantasy@13","15@finalfantasy"];
var Phone = ["7733720406","3720406773"];
var Email = ["Lightning@gmail.com","Chocobo@gmail.com"];
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
