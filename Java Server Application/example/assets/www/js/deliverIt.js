/**
 * 
 */


var xmlHttp = null;

function GetCustomerInfo()
{
    var email = document.getElementById( "txt-email" ).value;
    var password = document.getElementById( "txt-password" ).value;
   var Url =
	 "http://1-dot-android-vsahoo.appspot.com/android_app_project?email=" +
	 email+ "&password="+ password;
    //var Url = "http://1-dot-mdtservlet.appspot.com/testservlet?email="+email+"&password="+password;
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open("GET", Url, true);
    xmlHttp.send( null );
}

function ProcessRequest() 
{	
	alert(xmlHttp.readyState);
	alert(xmlHttp.status);
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        if ( xmlHttp.responseText == "Not found" ) 
        {
	          alert("Operation failed");
        }
        else
        {
        	alert(xmlHttp.responseText);
            window.location="NewOrder.html";
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
    var Url = "http://1-dot-mdtservlet.appspot.com/LogInServlet?firstName="+firstName+"&lastName="+lastName+"&email="+email+"&password="+password+"&address="+address+"&phoneNumber="+phoneNumber+"&flag="+flag;
	//var Url = "http://localhost:8888/loginservlet?restaurantName="+restaurantName+"&email="+email+"&password="+password+"&address="+address+"&phoneNumber="+phoneNumber+"&flag="+flag;
	xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = SignUpRequest;
    xmlHttp.open( "GET", Url, true );
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
    xmlHttp.onreadystatechange = SignUpRequest;
    xmlHttp.open( "GET", Url, true );
    xmlHttp.send( null );
}


function SignUpRequest()
{
	alert(xmlHttp.readyState);
	alert(xmlHttp.status);
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        alert(xmlHttp.responseText);                   
    }
}

/**
public Document getDocument(String xmlString) {
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder;

    Document spyDoc = null;
    try {
        builder = factory.newDocumentBuilder();
        spyDoc = builder.parse(new InputSource(new StringReader(xmlString)));

    } catch (Exception e) {
        e.printStackTrace();
    }

    return spyDoc;
}
*/




