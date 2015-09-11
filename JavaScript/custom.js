function getCookie()
{
	var obtain_data=document.cookie.split("~");
	var usr_data=[];
	for(var i=0;i<obtain_data.length-1;i++)
	{
		var data={"email":"","firstname":"","surname":"","dob":"","passwd":"","flag":""};
		data.email=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.firstname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.surname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.dob=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.passwd=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.flag=obtain_data[i].slice(obtain_data[i].indexOf("=")+1);
		usr_data[i]=data;
	}
	return user_login_data(usr_data);
}

function checkActiveUser()
{
	var usersdata=getCookie();
	for(var i=0;i<usersdata.length;i++)
		if(usersdata[i].flag!="")
			window.location.assign("home.html");
}
function login(mail)
{
  var usersdata=getCookie();
  var obtain_data=document.cookie.split("~");
  document.cookie="email=delete;expires=Thu, 01 Jan 1970;";
  for(var i=0;i<usersdata.length;i++)
  {
  		if(mail==usersdata[i].email)
  		{
        obtain_data[i]=obtain_data[i].slice(0,obtain_data[i].lastIndexOf("="));
        obtain_data[i]+="=1";
      }
  		document.cookie+=obtain_data[i]+"~";
  }
  window.location.assign("facebook.html");
}
function user_login_data(cookie_data)
{
	var credentials=[];
	for(var i=0;i<cookie_data.length;i++)
	{
		var extract_data={"email":"","passwd":"","flag":""};
		extract_data.email=cookie_data[i].email;
		extract_data.passwd=cookie_data[i].passwd;
		extract_data.flag=cookie_data[i].flag;
		credentials[i]=extract_data;
	}
	return credentials;
}
function setCookie(usersdata)
{
	document.cookie+="email="+usersdata.email+":first_name="+usersdata.firstname+":surname="+usersdata.surname+":dob="+usersdata.dob+":password="+usersdata.passwd+":flag=1~";
}
function checkCookie(mail,passwd)
{
	var user_login_data=getCookie();
	if(passwd=="")
	{
		for(var i=0;i<user_login_data.length;i++)
			if(mail==user_login_data[i].email)
				return true;
	}
	else
	{
		for(var i=0;i<user_login_data.length;i++)
		{
			if(mail==user_login_data[i].email && passwd==user_login_data[i].passwd)
				return true;
		}
		return false;
	}
}
function login_validator()
{
	var mail=document.getElementById("login_mail").value;
	var passwd=document.getElementById("login_passwd").value;
	if(mail=="" || passwd=="")
	{
		alert("Email or password cannot be empty!!");
		document.getElementById("login_mail").focus();
		return false;
	}
	if(isNaN(mail))
	{
		var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!mail.match(pattern))
		{
			alert("Invalid mail!!");
			document.getElementById("login_mail").focus();
			return false;
		}
	}
	else
	{
		if(mail.length!=10)
			{
				alert("Invalid Mobile number!!");
				document.getElementById("login_mail").focus();
				return false;
			}
	}
	if(passwd.length<8)
	{
		alert("Password is too small!!");
		document.getElementById("login_passwd").focus();
		return false;
	}
	if(checkCookie(mail,passwd))
	{
		login(mail);
		return true;
	}
	else
	{
		document.getElementById("login_passwd").value="";
		document.getElementById("login_passwd").placeholder="Wrong password!!";
		document.getElementById("login_passwd").focus();
		return false;
	}
}
function firstname_validator()
{
	var name=document.getElementById("first_name").value;
	var pattern=/\W|\d|_/ig;
	if(name=="" || name.length<3 || name.indexOf(" ")>-1 || name.match(pattern))
	{
		document.getElementById("first_name").value="";
		document.getElementById("first_name").placeholder="Invalid name!!";
		document.getElementById("first_name").focus();
		return false;
	}
	else
		return true;
}
function surname_validator()
{
	var name=document.getElementById("surname").value;
	var pattern=/\W|\d|_/ig;
	if(name=="" || name.length<3 || name.indexOf(" ")>-1 || name.match(pattern))
	{
		document.getElementById("surname").value="";
		document.getElementById("surname").placeholder="Invalid surname!!";
		document.getElementById("surname").focus();
		return false;
	}
	else
		return true;
}
function mail_validator()
{
	var mail=document.getElementById("email").value;
	var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!mail.match(pattern) && isNaN(mail))
	{
		document.getElementById("email").value="";
		document.getElementById("email").placeholder="Invalid mail id!!";
		document.getElementById("email").focus();
		return false;
	}
	else
	{
		if(mail.length!=10 && !isNaN(mail))
		{
			document.getElementById("email").value="";
			document.getElementById("email").placeholder="Invalid number!!";
			document.getElementById("email").focus();
			return false;
		}
		else
			return true;
	}
}
function mail_compair()
{
	var mail=document.getElementById("email").value;
	var check=document.getElementById("confirm").value;
	if(isNaN(mail))
	{
		if(isNaN(check))
		{
			if(!mail.match(check))
			{
				document.getElementById("confirm").value="";
				document.getElementById("confirm").placeholder="Mail not matched!!";
				document.getElementById("confirm").focus();
				return false;
			}
			else
				return true;
		}
		else
		{
			document.getElementById("confirm").value="";
			document.getElementById("confirm").placeholder="Email is provided above!!";
			document.getElementById("confirm").focus();
			return false;
		}
	}
	else
	{
		if(!isNaN(check))
		{
			if(mail!=check)
			{
				document.getElementById("confirm").value="";
				document.getElementById("confirm").placeholder="Numbers not matched!!";
				document.getElementById("confirm").focus();
				return false;
			}
			else
				return true;
		}
		else
		{
			document.getElementById("confirm").value="";
			document.getElementById("confirm").placeholder="Number is provided above!!";
			document.getElementById("confirm").focus();
			return false;
		}
	}
}
function passwd_validator()
{
	var passwd=document.getElementById("passwd").value;
	if(passwd=="" || passwd.length<8)
	{
		document.getElementById("passwd").value="";
		document.getElementById("passwd").placeholder="Invalid password!!";
		document.getElementById("passwd").focus();
		return false;
	}
	else
		return true;
}

function day_selector()
{
	var day=document.getElementById("day").value;
	if(day=="Day")
	{
		alert("Select a Day!!");
		document.getElementById("day").focus();
		return false;
	}
	else
		return true;
}
function month_selector()
{
	var month=document.getElementById("month").value;
	if(month=="Month")
	{
		alert("Select a Month!!");
		document.getElementById("month").focus();
		return false;
	}
	else
		return true;
}
function year_selector()
{
	var year=document.getElementById("year").value;
	if(year=="Year")
	{
		alert("Select a Year!!");
		document.getElementById("year").focus();
		return false;
	}
	else
		return true;
}
function gender_verification()
{
	if(document.getElementById("male").checked || document.getElementById("female").checked)
	{
		return true;
	}
	else
	{
		alert("Select gender");
		return false;
	}
}
function signup_validator()
{
	if(firstname_validator() && surname_validator() && mail_validator() && mail_compair() && passwd_validator() && day_selector() && month_selector() && year_selector() && gender_verification())
	{
		var firstname=document.getElementById("first_name").value;
		var surname=document.getElementById("surname").value;
		var email=document.getElementById("email").value;
		var password=document.getElementById("passwd").value;
		var dob=""+document.getElementById("day").value+"-"+document.getElementById("month").value+"-"+document.getElementById("year").value;
		var usersdata={"firstname":firstname,"surname":surname,"email":email,"dob":dob,"passwd":password};
		if(checkCookie(usersdata.email,""))
		{
			document.getElementById("email").value="";
			document.getElementById("confirm").value="";
			document.getElementById("email").placeholder="Mail or number is already registered";
			document.getElementById("confirm").placeholder="Re-enter email or mobile number";
			document.getElementById("email").focus();
			return false;
		}
		else
		{
			setCookie(usersdata);
			return true;
		}
	}
	else
		return false;
}
