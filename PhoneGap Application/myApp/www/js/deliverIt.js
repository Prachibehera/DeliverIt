/**
 * 
 */

var xmlHttp = null;

function GetCustomerInfo() {
	var email = document.getElementById("txt-email").value;
	var password = document.getElementById("txt-password").value;
	var Url = "http://1-dot-mdtservlet.appspot.com/loginservlet";
	var params = "email=" + email + "&password=" + password;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", Url + "?" + params, true);
	xmlHttp.setRequestHeader("Content-type", "text/plain");
	xmlHttp.onreadystatechange = ProcessLogInRequest;
	xmlHttp.send(null);
}

function ProcessLogInRequest() {
	if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		var response = xmlHttp.responseText;
		if (response == "1") {
			window.location = "NewOrder.html";
		} else if(response == "0") 
			window.location = "agent_notification.html";
		else {
			alert("Authentication Failed!!! Please try again.");
			window.location = "sign_in.html";
		}
	}
}

function SignUpAgent() {
	var flag = 0;
	var firstName = document.getElementById("txt-first-name").value;
	var lastName = document.getElementById("txt-last-name").value;
	var email = document.getElementById("txt-email").value;
	var password = document.getElementById("txt-password").value;
	var address = document.getElementById("txt-address").value;
	var phoneNumber = document.getElementById("txt-phone").value;
	var Url = "http://1-dot-mdtservlet.appspot.com/loginservlet";
	var params = "firstName=" + firstName + "&lastName=" + lastName + "&email="
			+ email + "&password=" + password + "&address=" + address
			+ "&phoneNumber=" + phoneNumber + "&flag=" + flag;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("PUT", Url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-length", params.length);
	xmlHttp.setRequestHeader("Connection", "close");
	xmlHttp.onreadystatechange = ProcessSignUpRequest;
	xmlHttp.send(params);

}

function SignUpRestaurant() {
	var flag = 1;
	var restaurantName = document.getElementById("txt-name").value;
	var email = document.getElementById("txt-email").value;
	var password = document.getElementById("txt-password").value;
	var address = document.getElementById("txt-address").value;
	var phoneNumber = document.getElementById("txt-phone").value;
	var Url = "http://1-dot-mdtservlet.appspot.com/loginservlet";
	var params = "restaurantName=" + restaurantName + "&email=" + email
			+ "&password=" + password + "&address=" + address + "&phoneNumber="
			+ phoneNumber + "&flag=" + flag;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("PUT", Url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-length", params.length);
	xmlHttp.setRequestHeader("Connection", "close");
	xmlHttp.onreadystatechange = ProcessSignUpRequest;
	xmlHttp.send(params);
}

function ProcessSignUpRequest() {
	if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		window.location("sign_in.html");
	}
	alert("Sign Up Failed");
}

function SendOrderInfo() {
	var cust_name = document.getElementById("cname").value;
	var cust_phone = document.getElementById("phone").value;
	var cust_address = document.getElementById("address").value;
	var order_id = document.getElementById("OrderID").value;
	var Url = "http://1-dot-mdtservlet.appspot.com/testservlet";
	var params = "customer_name=" + cust_name + "&customer_phone=" + cust_phone + "&customer_location=" + cust_address + "&order_id=" + order_id + "&restaurant_name=yuva&restaurant_location=2715 murray avenue,pittsburgh";
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("POST", Url + "?"+ params, true);
	xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-length", params.length);
	xmlHttp.setRequestHeader("Connection", "close");
	xmlHttp.onreadystatechange = ProcessOrderRequest;
	xmlHttp.send(params);
}

function ProcessOrderRequest() {
	if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		var response = xmlHttp.responseText;
		if (response == "Inserted") {
			window.location = "NewOrder.html";
		} else {
			alert("Order could not be placed. Please try again!");
			window.location = "NewOrder.html";
		}
	}
}
