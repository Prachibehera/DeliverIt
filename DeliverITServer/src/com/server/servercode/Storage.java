package com.server.servercode;

import java.util.HashMap;
import java.util.Map;

public class Storage {
	//Key for each hashmap is user ID
	private HashMap<String, Login> loginDetails = new HashMap<String, Login>();
	private HashMap<String, Restaurant> restaurantDetails = new HashMap<String, Restaurant>();
	private HashMap<String, Agent> agentDetails = new HashMap<String, Agent>();

public void setterLogin(String userID, Login l){
	loginDetails.put(userID,l);	
}

public void setterRestaurant(String userID, Restaurant r){
	restaurantDetails.put(userID,r);
}

public void setterAgent(String userID, Agent a){
	
	agentDetails.put(userID,a);
}
	
public String getterLogin(String userID){
	if(loginDetails.containsKey(userID)){
		return loginDetails.get(userID).toString();
}   else {
	String result = "Invalid user";
	return result;
	}}

public String getterRestaurant(String userID, String hash ){
	if(restaurantDetails.containsKey(userID)){
		return restaurantDetails.get(userID).toString();
}   else {
	String result = "Invalid user";
	return result;
	}
	}
	
public String getterAgent(String userID, String hash ){
	if(agentDetails.containsKey(userID)){
		return agentDetails.get(userID).toString();
}   else {
	String result = "Invalid user";
	return result;
	}
}
}
