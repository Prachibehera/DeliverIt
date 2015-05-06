package edu.cmu.vsahoo;

public class Restaurant {
	private String restaurantName;
	private String restaurantAddress;
	private String phoneNumber;
	
	
	
	public Restaurant(String restaurantName, String restaurantAddress,String phoneNumber)
	{
		this.restaurantName = restaurantName;
		this.restaurantAddress = restaurantAddress;
		this.phoneNumber = phoneNumber;
		
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public String getResturantAddress() {
		return restaurantAddress;
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
        xml.append("<Address>" + restaurantAddress + "</Address>");
        xml.append("\n");
        xml.append("<phoneNumber>" + phoneNumber + "</phoneNumber>");
        xml.append("</spy>");
        return xml.toString();

    }
	
	

}

