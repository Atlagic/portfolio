function check(){
var to = "atlagic.aleksandar@gmail.com"; 
var fromm = _('tbEmail').value; 
var firstName = _("tbName").value;
var lastName = _('tbLastname').value;
var message = _("txtaMessage");
	
var FirstName = /^[A-Z]{1}[a-z]{2,14}$/;
var LastName = /^[A-Z]{1}[a-z]{3,14}$/;
var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!FirstName.test(firstName))
{
	_('tbName').style.border="1.5px solid red";
}
else if(!LastName.test(lastName))
{
	_('tbLastname').style.border="1.5px solid red";
}
else if(!email.test(fromm))
{
	_('tbEmail').style.border="1.5px solid red";
}
else if(txtaMessage.value.length == 0)
{
	document.getElementById('txtaMessage').style.border="1.5px solid red";
}
else
{
	submitForm();								
}
}		
function _(id){
return document.getElementById(id);
}
function submitForm(){
_("submit").disabled = true;
//_("status").innerHTML = 'please wait ...';

var formdata = new FormData();

formdata.append( "name", _('tbName').value );
formdata.append( "lastname", _('tbLastname').value );
formdata.append( "email", _('tbEmail').value );
formdata.append( "message", _("txtaMessage").value );

var ajax = new XMLHttpRequest();
ajax.open("POST", "email.php");
ajax.onreadystatechange = function(){
	if(ajax.readyState == 4 && ajax.status == 200){
		if(ajax.responseText == "success"){
			_("result").innerHTML = '<h2>Thanks '+_("tbName").value+', your message has been sent.</h2>';
		}
		else{
			//_("status").innerHTML = ajax.responseText;
			 _("submit").disabled = false;
		}
	}
}
ajax.send( formdata );
}