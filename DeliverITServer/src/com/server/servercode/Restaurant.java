package com.server.servercode;

public class Restaurant {
	private String restaurantName;
	private String resturantAddress;
	private String phoneNumber;
	
	
	
	public Restaurant(String restaurantName, String restaurantAddress,String phoneNumber)
	{
		this.restaurantName = restaurantName;
		this.resturantAddress = resturantAddress;
		this.phoneNumber = phoneNumber;
		
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public String getResturantAddress() {
		return resturantAddress;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}
	
	
	public String restaurantXML() {
        StringBuffer xml = new StringBuffer();

        xml.append("<Restaurant>");
        xml.append("\n");
        xml.append("<Name>" + restaurantName + "</Name>");
        xml.append("\n");
        xml.append("<Address>" + resturantAddress + "</Address>");
        xml.append("\n");
        xml.append("<phoneNumber>" + phoneNumber + "</phoneNumber>");
        xml.append("</spy>");
        return xml.toString();

    }
	
	

}
