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
	return login_data(usr_data);
}
