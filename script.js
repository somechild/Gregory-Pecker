function submit() {

var x = new String;
var y = new String;
var z = new String;

var x = document.forms["form"]["msg"].value;
var y = document.forms["form"]["name"].value;
var z = document.forms["form"]["email"].value;
	
	if (x=="" || x==" " || y=="" || y==" " || z=="" || z==" ") {
		document.write("<br><h1 align='center'>Error</h1><br><p align='center'>Please fill in all the input fields</p>");
		window.setTimeout("location.href='contact.html'",1500)
		return false;
} 
	else {
		document.write('<br><h1 align="center">Your message has been sent</h1><br><p align="center">You will be redirected to the home page shortly</p>');
		window.setTimeout("location.href='index.html'",2000);
};
	
}