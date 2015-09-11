/*function extract_image_cookie_data(data)
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
function setCookie(file)
{
  document.cookie="usr_image=image:"+file+";";
}
function get_image()
{
  var file_extention=document.getElementById("file_get").value.slice(document.getElementById("file_get").value.lastIndexOf(".")+1);
  if(file_extention!="jpg" && file_extention!="png" && file_extention!="gif")
    alert("Not a valid image");
  else
  {
    var file=document.getElementById("file_get");
    if(file.files[0].size<2048000)
    {
      file=window.URL.createObjectURL(file.files[0]);
      setCookie(file);
      document.getElementById("gallery").innerHTML="";
      document.getElementById("gallery").innerHTML="<img src='"+file+"' style='height:35%;width:100%;'>";
    }
    else
      alert("File size is greater than 2MB");
  }
}
function checkImage()
{
  var obtain_data=document.cookie.split("~");
  var user_data_uploads=obtain_data[obtain_data.length-1].split(";");
  var get_upload_pair=extract_image_cookie_data(user_data_uploads);
  for(var i=0;i<get_upload_pair.length;i++)
  {
    if(get_upload_pair[i].name=="image")
    {
      document.getElementById("image").innerHTML="";
      document.getElementById("image").innerHTML="<img src='"+get_upload_pair[i].value+"' style='height:35%;width:100%;'>";
    }
  }
}
*/
