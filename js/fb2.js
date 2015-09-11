var user;
var user_email;
var old_post="";
function profile()
{
  window.location.assign("profile.html");
}
function checkActiveUser()
{
  var f=true;
	var usr_data=getcookie();
	for(var i=0;i<usr_data.length;i++)
		if(usr_data[i].flag!="")
		{
      f=false;
      user=""+usr_data[i].fname+" "+usr_data[i].lname;
      user_email=usr_data[i].email;
      posting();
       if(old_post!="")
      {
        document.getElementById("post_area").innerHTML=old_post;
      }
    }
  if(f)
    window.location.assign("Facebook.html");
}

function new_post()
{
  document.getElementById("post_area").innerHTML="";
  var container="<div class='row'><div class='col-sm-12'><h5><strong>"+user+"</strong></h5>";
  post=container+document.getElementById("post").value+"</div></div><br />"+old_post;
  old_post=post;
  if(post!="")
    document.getElementById("post_area").innerHTML=post;
  document.getElementById("post").value="";
  setcookie(post);
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
var inn={"email":"","fname":"","lname":"","flag":""};
inn.email=var_data[i].email;
inn.fname=var_data[i].fname;
inn.lname=var_data[i].lname;
inn.flag=var_data[i].flag;
credentials[i]=inn;
}
return credentials;
}

function logout()
{
  var usr_data=getcookie();
  document.cookie="usr_image=delete;expires=Tue, 01 Jan 1970;"
  document.cookie="user=delete;expires=Thu, 01 Jan 1970;"
  var obtain_data=document.cookie.split("~");
  document.cookie="mail=delete;expires=Mon, 07 Nov 1994;";
  for(var i=0;i<usr_data.length;i++)
 {
  		if(user_email==usr_data[i].email)
  		{
        obtain_data[i]=obtain_data[i].slice(0,obtain_data[i].lastIndexOf("="));
        obtain_data[i]+="=";
      }
  		document.cookie+=obtain_data[i]+"~";
  }
 window.location.assign("Facebook.html");

}


function posting()
{
  var data=document.cookie.split("~");
  var usr_uploads=data[data.length-1].split(";");
  var get_upload_pair=getJSON(usr_uploads);
  for(var i=0;i<get_upload_pair.length;i++)
  if(get_upload_pair[i].name=="post")
    old_post=get_upload_pair[i].value;
}

function setcookie(post)
{
  document.cookie="user=post"+":"+post+";";
}

function getJSON(data)
{
  var extract=[];
  var index=0;
  for(var i=0;i<data.length;i++)
  {
    var pair={"name":"","value":""};
    if(data[i]=="")
      continue;
    pair.name=data[i].slice(data[i].indexOf("=")+1,data[i].indexOf(":"));
    pair.value=data[i].slice(data[i].indexOf(":")+1);
    extract[index++]=pair;
  }
  return extract;
}