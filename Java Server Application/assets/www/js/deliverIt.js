/**
 * 
 */


var xmlHttp = null;

function GetCustomerInfo()
{
    var email = document.getElementById( "txt-email" ).value;
    var password = document.getElementById( "txt-password" ).value;
    var Url = "http://1-dot-mdtservlet.appspot.com/loginservlet?email=" + email+ "&password="+ password;
    //var Url = "http://1-dot-mdtservlet.appspot.com/testservlet?email="+email+"&password="+password;
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = ProcessLogInRequest;
    xmlHttp.open("GET", Url, true);
    xmlHttp.send( null );
}

function ProcessLogInRequest() 
{	
	alert(xmlHttp.readyState);
	alert(xmlHttp.status);
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        if ( xmlHttp.responseText == "1") 
        {
        	alert(xmlHttp.responseText);
            window.location="NewOrder.html";
        }
        else if(xmlHttp.responseText == "0")
        {
        	alert(xmlHttp.responseText);
        	window.location="agent_notification.html";
        }
        else
        {
        	alert(xmlHttp.responseText);
        }
    }
}


function SignUpAgent()
{
	var flag = 0;
	var firstName = document.getElementById( "txt-first-name" ).value;
	var lastName = document.getElementById("txt-last-name").value; 
	var email = document.getElementById("txt-email").value;
	var password = document.getElementById("txt-password").value;
	var address = document.getElementById("txt-address").value;
	var phoneNumber = document.getElementById("txt-phone").value;
    var Url = "http://1-dot-mdtservlet.appspot.com/loginservlet?firstName="+firstName+"&lastName="+lastName+"&email="+email+"&password="+password+"&address="+address+"&phoneNumber="+phoneNumber+"&flag="+flag;
	//var Url = "http://localhost:8888/loginservlet?restaurantName="+restaurantName+"&email="+email+"&password="+password+"&address="+address+"&phoneNumber="+phoneNumber+"&flag="+flag;
	xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = SignUpRequest;
    xmlHttp.open( "POST", Url, true );
    xmlHttp.send( null );

	
}

function SignUpRestaurant()
{
	var flag = 1;
	var restaurantName = document.getElementById( "txt-name" ).value;
	var email = document.getElementById("txt-email").value;
	var password = document.getElementById("txt-password").value;
	var address = document.getElementById("txt-address").value;
	var phoneNumber = document.getElementById("txt-phone").value;
	var Url = "http://1-dot-mdtservlet.appspot.com/loginservlet?restaurantName="+restaurantName+"&email="+email+"&password="+password+"&address="+address+"&phoneNumber="+phoneNumber+"&flag="+flag;
	//var Url = "http://localhost:8888/loginservlet?restaurantName="+restaurantName+"&email="+email+"&password="+password+"&address="+address+"&phoneNumber="+phoneNumber+"&flag="+flag;
	xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = ProcessSignUpRequest;
    xmlHttp.open( "POST", Url, true );
    xmlHttp.send( null );
}


function ProcessSignUpRequest()
{
	alert(xmlHttp.readyState);
	alert(xmlHttp.status);
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {	
        alert(xmlHttp.responseText);
        window.location("sign_in.html");        
    }
    
    alert("Sign Up Failed");
}





