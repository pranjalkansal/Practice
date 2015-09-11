// User data collection variable.
var usr_data;

function getCookie()
{
	var obtain_data=document.cookie.split("~");
	var usr_data=[];
	for(var i=0;i<obtain_data.length-1;i++)
	{
		var data={"email":"","firstname":"","surname":"","dob":"","passwd":""};
		data.email=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.firstname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.surname=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.dob=obtain_data[i].slice(obtain_data[i].indexOf("=")+1,obtain_data[i].indexOf(":"));
		obtain_data[i]=obtain_data[i].slice(obtain_data[i].indexOf(":")+1);
		data.passwd=obtain_data[i].slice(obtain_data[i].indexOf("=")+1);
		usr_data[i]=data;
	}
	return usr_data;
}
function create_user_pannel()
{
	usr_data=getCookie();
	var data="<table class='table'><tr><th>S.No.</th><th>First_Name</th><th>Last_Name</th><th>E-mail</th><th>Birth_date</th><th>Selected</th></tr>";
	for(var i=0;i<usr_data.length;i++)
	{
		data+="<tr><td>"+(i+1)+"</td><td>"+usr_data[i].firstname+"</td><td>"+usr_data[i].surname+"</td><td>"+usr_data[i].email+"</td><td>"+usr_data[i].dob+"</td><td><input type='checkbox' id='"+i+"'></input></td></tr>";
	}
	document.getElementById("users").innerHTML=data+"</table>";
	if(usr_data.length)
		document.getElementById("del_button").innerHTML="<button type='button' class='btn btn-warning btn-md center-block' onclick='confirmDelete()'>Delete Users</button>";
	else
		document.getElementById("del_button").innerHTML="";
}
function confirmDelete()
{
	var usr_to_delete=getUsersToDelete();
	if(usr_to_delete.length)
	{
		document.getElementById("count").innerHTML=usr_to_delete.length;
		document.getElementById("confirm_block").style.display="block";
	}
}
function cancelDelete()
{
	document.getElementById("confirm_block").style.display="none";
}
function continueDelete()
{
	var usr_to_delete=getUsersToDelete();
	document.getElementById("confirm_block").style.display="none";
	deleteCookies(usr_to_delete);
}
function getUsersToDelete()
{
	var incr=0; // array position specifier.
	var usr_to_delete=[];
	for(var i=0;i<usr_data.length;i++)
	{
		if(document.getElementById(''+i).checked)
			usr_to_delete[incr++]=usr_data[i].email;
	}
	return usr_to_delete;
}
function deleteCookies(usr_to_delete)
{
	var flag=false;
	var obtain_data=document.cookie.split("~");
    var expiry=new Date();
	document.cookie="email=delete;expires="+expiry.toUTCString()+";";
	for(var i=0;i<usr_data.length;i++)
	{
		for(var j=0;j<usr_to_delete.length;j++)
			if(usr_to_delete[j]==usr_data[i].email)
			{
				flag=true;
				break;
			}
			if(flag)
			{
				flag=false;
				continue;
			}
			else
				document.cookie+=obtain_data[i]+"~";
		}
		window.location.reload(true);
}
