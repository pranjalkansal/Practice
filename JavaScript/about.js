var open=false;
var click=false;
var access=-1;
function hide()
{
  open=false;
  click=false;
  access=-1;
  document.getElementById("iphone").style.display="none";
  document.getElementById("android").style.display="none";
  document.getElementById("windows").style.display="none";
}
function showIphone()
{
  if((!open && !click) || (click && access!=0))
  {
    hide();
    document.getElementById("iphone").style.display="block";
    open=true;
    access=0;
    click=true;
  }
  else
    hide();
}
function showAndroid()
{
  if((!open && !click) || (click && access!=1))
  {
    hide();
    document.getElementById("android").style.display="block";
    open=true;
    access=1;
    click=true;
  }
  else
    hide();
}
function showWindows()
{
  if((!open && !click) || (click && access!=2))
  {
    hide();
    document.getElementById("windows").style.display="block";
    open=true;
    access=2;
    click=true;
  }
  else
    hide();
}
