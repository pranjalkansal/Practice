function logfun()
{
var x;
var y;
var check;
x=document.getElementById("v1").value;
if(x=="")
{
	check=0;
	alert("User Name Not Valid");
	document.getElementById("v1").focus();
	return false;
}
else
check=1;

y=document.getElementById("v2").value;
if(y=="")
{
	check=0;
	alert("Invalid password");
	document.getElementById("v2").focus();
	return false;
}
else
check=1;
if(check)
{

if(checkcookie(document.getElementById("v1").value,document.getElementById("v2").value))
	{login(document.getElementById("v1").value);
	return true;}
else 
	return false;
}
}

function signup()
{
var x;
x=document.getElementById("v3").value;
if(x=="")
{
	window.alert("Enter your First Name");
	document.getElementById("v3").focus();
	return false;}
if(x.indexOf(" ")>-1)
{
	window.alert("Space not allowed");
	document.getElementById("v3").focus();
 return false;}

x=document.getElementById("v4").value;
if(x=="")
{	
	window.alert("Enter your Last Name");
	document.getElementById("v4").focus();
	 return false;}
if(x.indexOf(" ")>-1)
{
	window.alert("Space not allowed"); 
	document.getElementById("v4").focus();
	return false;
}

	var epat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	x=document.getElementById("v5").value;

if(!isNaN(x))
{if((x.length!=10)||(x.indexOf("+")>-1))
{
window.alert("Invalid Phone number");
document.getElementById("v5").focus();
return false;
}}
if(isNaN(x)&&(!(x.match(epat))))
{window.alert("Please enter valid email or phone number");
document.getElementById("v5").focus();
return false;}
var y;
y=document.getElementById("v6").value;
if(x!=y)
{	window.alert("email or phone number didn't match");
	document.getElementById("v6").focus();
	return false;
} 
x=document.getElementById("v7").value;
if(x.length<8)
{	window.alert("Password must be atleast 8 character long!");
	return false;
}

x=document.getElementById("v8").value;
if(x=="Day")
{
	window.alert("Select the Day");
	document.getElementById("v8").focus();
	return false;
}
else{
	x=document.getElementById("v9").value;
	if(x=="Month")
{	
	window.alert("Select the month");
	document.getElementById("v9").focus();
	return false;
}
else{
x=document.getElementById("v10").value;
if(x=="Year")
{
	window.alert("Select the Year");
	document.getElementById("v10").focus();
	return false;
}
} }

if((document.getElementById("v11").checked==false)&&(document.getElementById("v12").checked==false))
{
window.alert("Select the Gender");
return false;
}
if(!(checkcookie(document.getElementById("v5").value,"")))
	return false;
var dob=""+document.getElementById("v8").value+document.getElementById("v9").value+document.getElementById("v10").value;
document.cookie+="mail="+document.getElementById("v5").value+":fname="+document.getElementById("v3").value+":lname="+document.getElementById("v4").value+":dob="+dob+":pswrd="+document.getElementById("v7").value+":flag=1~";
return true;
}

function checkcookie(mail,pswrd)
{
var login_data=getcookie();
if(pswrd=="")
{
	for(var i=0;i<login_data.length;i++)
	{
if(login_data[i].email==mail)
	{
		document.getElementById("v5").value="E-mail already registered!";
	return false;	
}
}
return true;
}
for(var i=0;i<login_data.length;i++)
{
if(login_data[i].email==mail)
{
 if(login_data[i].pswrd==pswrd)
{

return true;
}
else
{	
window.alert("Password didn't match!");
return false;
}}
}
document.getElementById("v1").value="Invalid E-mail!";
return false;
}

function getcookie()
{
var obtain_data=document.cookie.split("~");
var var_data=[];
for(var i=0;i<obtain_data.length-1;i++)
{
var data={"email":"","fname":"","lname":"","dob":"","pswrd":"","flag":""};	
data.email=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
data.fname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
data.lname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
data.dob=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
data.pswrd=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
data.flag=obtain_data[i].slice(obtain_data[i].indexOf("=")+1);
var_data[i]=data;
}
var credentials=[];
for(var i=0;i<var_data.length;i++)
{
var inn={"email":"","pswrd":"","flag":""};
inn.email=var_data[i].email;
inn.pswrd=var_data[i].pswrd;
inn.flag=var_data[i].flag;
credentials[i]=inn;
}
return credentials;
}

function checkActiveUser()
{
	var usr_data=getcookie();
	for(var i=0;i<usr_data.length;i++)
	{	if(usr_data[i].flag!="")
			window.location.assign("home.html");
	}
}
function login(mail)
{
  var usr_data=getcookie();
  var obtain_data=document.cookie.split("~");
  document.cookie="mail=delete;expires=Mon, 07 Nov 1994;";
  for(var i=0;i<usr_data.length;i++)
  {
  		if(mail==usr_data[i].email)
  		{
        obtain_data[i]=obtain_data[i].slice(0,obtain_data[i].lastIndexOf("="));
        obtain_data[i]+="=1";
      }
  		document.cookie+=obtain_data[i]+"~";
  }
  window.location.assign("Facebook.html");
}
