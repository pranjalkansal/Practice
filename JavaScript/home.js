var user;
var user_email;
var old_post="";
function extract_cookie_data(data)
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
function checkPost()
{
  var data=document.cookie.split("~");
  var usr_uploads=data[data.length-1].split(";");
  var get_upload_pair=extract_cookie_data(usr_uploads);
  for(var i=0;i<get_upload_pair.length;i++)
  if(get_upload_pair[i].name=="post")
    old_post=get_upload_pair[i].value;
}
function checkActiveUser()
{
  var flag=true;
	var usr_data=getCookie();
	for(var i=0;i<usr_data.length;i++)
		if(usr_data[i].flag!="")
		{
      flag=false;
      user=""+usr_data[i].firstname+" "+usr_data[i].surname;
      user_email=usr_data[i].email;
      checkPost();
      create_table();
      check_on_load();
      if(old_post!="")
      {
        document.getElementById("post_area").innerHTML=old_post;
      }
    }
  if(flag)
    window.location.assign("facebook.html");
}
function login_data(cookie_data)
{
	var credentials=[];
	for(var i=0;i<cookie_data.length;i++)
	{
		var extract_data={"email":"","firstname":"","surname":"","flag":""};
		extract_data.firstname=cookie_data[i].firstname;
    extract_data.email=cookie_data[i].email;
    extract_data.surname=cookie_data[i].surname;
		extract_data.flag=cookie_data[i].flag;
		credentials[i]=extract_data;
	}
	return credentials;
}
function setCookie(post)
{
  document.cookie="user=post"+":"+post+";";
}
function new_post()
{
  var container="<div class='row'><div class='col-sm-12'><h5><strong>"+user+"</strong></h5>";
  post=container+document.getElementById("post").value+"</div></div><br />"+old_post;
  old_post=post;
  if(post!="")
    document.getElementById("post_area").innerHTML=post;
  setCookie(post);
}
function logout()
{
  var usr_data=getCookie();
  document.cookie="usr_image=delete;expires=Tue, 01 Jan 1970;"
  document.cookie="user=delete;expires=Thu, 01 Jan 1970;"
  var obtain_data=document.cookie.split("~");
  document.cookie="email=delete;expires=Thu, 01 Jan 1970;";
  for(var i=0;i<usr_data.length;i++)
  {
  		if(user_email==usr_data[i].email)
  		{
        obtain_data[i]=obtain_data[i].slice(0,obtain_data[i].lastIndexOf("="));
        obtain_data[i]+="=";
      }
  		document.cookie+=obtain_data[i]+"~";
  }
  window.location.assign("facebook.html");
}
function create_table()
{
  var user_data=getCookie();
  var data1="<ul class='list-group'>";
  var data2="";
  for(var i=0;i<user_data.length;i++)
	{
		var data2=data2+"<li class='list-group-item list-group-item-info'><span class='badge'>0</span><strong>"+user_data[i].firstname+"</strong></li>";
  }
  document.getElementById("blank").innerHTML=data1+data2+"</ul>";
  document.getElementById("link").innerHTML=user;
}
function check_on_load()
{
  var x=localStorage.getItem(user);
  if(x)
  {
    //var source=localStorage.getItem("user");
    document.getElementById("gallery").innerHTML="<img src='"+x+"' style='height:35%;width:100%;'>";
  }
  else
  {
    var y="<button onclick='onbuttonclick()'>upload</button>";
   document.getElementById("button").innerHTML=y;
  }
}
function onbuttonclick()
{
    var file_extention=document.getElementById("file_get").value.slice(document.getElementById("file_get").value.lastIndexOf(".")+1);
    if(file_extention!="jpg" && file_extention!="png" && file_extention!="gif")
    {
        alert("Not a valid image");
    }
    else
    {
          var file=document.getElementById("file_get");
          if(file.files[0].size<2048000)
          {
           var filepath = window.URL.createObjectURL(file.files[0]);
           localStorage.setItem(user,filepath);
           var source=localStorage.getItem(user);
           document.getElementById("gallery").innerHTML="";
           document.getElementById("gallery").innerHTML="<img src='"+source+"' style='height:35%;width:100%;'>";
          }
         else
         {
           alert("File size is greater than 2MB");
         }
    }
}
